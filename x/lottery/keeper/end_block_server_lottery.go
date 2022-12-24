package keeper

import (
	"context"
	"encoding/binary"
	"strconv"

	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	"crypto/sha256"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k Keeper) SelectLotteryWinner(goCtx context.Context) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	bets := k.GetAllBet(ctx)

	txCount := uint32(len(bets))

	var betTxs string
	var cyclePoolReward sdk.Coins
	var highestBet sdk.Coins
	var lowestBet sdk.Coins
	var isProposerIncluded bool

	betIndexes := make(map[int]string, len(bets))
	proposerAddr := string(ctx.BlockHeader().ProposerAddress[:])

	if len(bets) < types.LotteryBetThreshold {
		return
	}

	for index, bet := range bets {
		betTxs += bet.String()
		if bet.Creator == proposerAddr {
			isProposerIncluded = true
			ctx.EventManager().EmitEvent(
				sdk.NewEvent(
					types.SelectLotteryWinnerEventType,
					sdk.NewAttribute(
						types.SelectLotteryWinnerEventProposer,
						string(proposerAddr[:]),
					),
					sdk.NewAttribute(types.SelectLotteryWinnerEventBetCreator, bet.Creator),
				),
			)
			break
		}

		betIndexes[index] = bet.Creator
		betSize, err := sdk.ParseCoinsNormalized(bet.BetSize)
		if err != nil {
			panic(err)
		}

		if highestBet.IsAllLT(betSize) {
			highestBet = betSize
		}

		if lowestBet.IsAllGT(betSize) {
			lowestBet = betSize
		}

		cyclePoolReward = cyclePoolReward.Add(betSize...)
	}

	if isProposerIncluded {
		return
	}

	hashBytes := sha256.Sum256([]byte(betTxs))
	hashInt := binary.BigEndian.Uint32(hashBytes[:])
	winnerIndex := int((hashInt ^ 0xFFFF) % txCount)
	winnerAddr := betIndexes[winnerIndex]

	winner, err := sdk.AccAddressFromBech32(winnerAddr)
	if err != nil {
		panic(err)
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	winnerBet, _ := k.GetBet(ctx, winnerAddr)
	winnerBetSize, err := sdk.ParseCoinsNormalized(winnerBet.BetSize)
	if err != nil {
		panic(err)
	}

	winnerIndexStr := strconv.Itoa(winnerIndex)
	var reward sdk.Coins
	var winnerType string

	if winnerBetSize.IsEqual(highestBet) {
		winnerType = types.HighestBetWin
		moduleBalance := k.bankKeeper.GetAllBalances(ctx, moduleAcct)
		reward = reward.Add(moduleBalance...)
	} else if winnerBetSize.IsEqual(lowestBet) {
		winnerType = types.LowestBetWin
	} else {
		winnerType = types.NormalBetWin
		reward = reward.Add(cyclePoolReward...)
	}

	if winnerType != types.LowestBetWin {
		sdkError := k.bankKeeper.SendCoinsFromModuleToAccount(
			ctx,
			types.ModuleName,
			winner,
			reward,
		)
		if sdkError != nil {
			panic(sdkError)
		}
	}

	k.AppendLotteryRecord(ctx, types.LotteryRecord{
		WinnerIndex:   winnerIndexStr,
		WinnerAddress: winnerAddr,
		WinnerType:    winnerType,
		Reward:        reward.String(),
	})

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.SelectLotteryWinnerEventType,
			sdk.NewAttribute(types.SelectLotteryWinnerEventBetWinner, winnerAddr),
			sdk.NewAttribute(types.SelectLotteryWinnerEventBetWinnerIndex, winnerIndexStr),
			sdk.NewAttribute(types.SelectLotteryWinnerEventBetWinnerType, winnerType),
			sdk.NewAttribute(types.SelectLotteryWinnerEventBetWinnerReward, reward.String()),
		),
	)

	for _, b := range bets {
		k.RemoveBet(ctx, b.Index)
	}
}
