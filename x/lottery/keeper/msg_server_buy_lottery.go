package keeper

import (
	"context"
	"strconv"

	"lottery/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) BuyLottery(goCtx context.Context, msg *types.MsgBuyLottery) (*types.MsgBuyLotteryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	lotteryFee := sdk.Coins{sdk.NewInt64Coin("token", types.LotteryFee)}
	fee, err := sdk.ParseCoinsNormalized(msg.Fee)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	if !fee.IsEqual(lotteryFee) {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, types.ErrInvalidLotteryFee.Error(), lotteryFee.String(), fee.String())
	}

	minBet := sdk.Coins{sdk.NewInt64Coin("token", types.MinimumBet)}
	maxBet := sdk.Coins{sdk.NewInt64Coin("token", types.MaximumBet)}
	bet, err := sdk.ParseCoinsNormalized(msg.BetSize)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	if bet.IsAllLT(minBet) || bet.IsAllGT(maxBet) {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, types.ErrInvalidBetSize.Error(), minBet.String(), maxBet.String(), bet.String())
	}

	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

	existingBet, isFound := k.GetBet(ctx, msg.Creator)

	// if the same user has new lottery transactions, return fund back to account first
	if isFound {
		betSize, err := sdk.ParseCoinsNormalized(existingBet.BetSize)
		if err != nil {
			panic(err)
		}

		moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
		sdkError := k.bankKeeper.SendCoins(ctx, moduleAcct, buyer, betSize)
		if sdkError != nil {
			panic(sdkError)
		}
	}

	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, bet.Add(fee...))
	if err != nil {
		return nil, err
	}

	bets := k.GetAllBet(ctx)
	betIndex := strconv.Itoa(len(bets))
	newBets := types.Bet{
		Index:    msg.Creator,
		Creator:  msg.Creator,
		BetSize:  bet.String(),
		BetIndex: betIndex,
	}

	k.SetBet(ctx, newBets)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.BuyLotteryEventType,
			sdk.NewAttribute(types.BuyLotteryEventBuyer, msg.Creator),
			sdk.NewAttribute(types.BuyLotteryEventBetSize, msg.BetSize),
			sdk.NewAttribute(types.BuyLotteryEventBetFee, msg.Fee),
			sdk.NewAttribute(types.BuyLotteryEventBetIndex, betIndex),
		),
	)

	return &types.MsgBuyLotteryResponse{}, nil
}
