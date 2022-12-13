package keeper

import (
	"context"
	"fmt"
	"strconv"

	"lottery/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyLottery(goCtx context.Context, msg *types.MsgBuyLottery) (*types.MsgBuyLotteryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	lotteryFee := sdk.Coins{sdk.NewInt64Coin("token", 5)}
	fee, err := sdk.ParseCoinsNormalized(msg.Fee)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Unable to parse fee value")
	}

	if !fee.IsEqual(lotteryFee) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds,
			fmt.Sprintf("Lottery fee is %s", lotteryFee.String()))
	}

	minBet := sdk.Coins{sdk.NewInt64Coin("token", 1)}
	maxBet := sdk.Coins{sdk.NewInt64Coin("token", 100)}
	bet, err := sdk.ParseCoinsNormalized(msg.BetSize)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Unable to parse bet-size value")
	}

	if bet.IsAllLT(minBet) || bet.IsAllGT(maxBet) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest,
			fmt.Sprintf("Bet size can be %s to %s ", minBet.String(), maxBet.String()))
	}

	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

	_, isFound := k.GetBet(ctx, msg.Creator)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest,
			"Bet for this sender already existOnly 1 lottery transaction is valid per account per cycle")
	}

	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, bet.Add(fee...))
	if err != nil {
		return nil, err
	}

	bets := k.GetAllBet(ctx)
	newBets := types.Bet{
		Index:    msg.Creator,
		Creator:  msg.Creator,
		BetSize:  bet.String(),
		BetIndex: strconv.Itoa(len(bets)),
	}

	k.SetBet(ctx, newBets)

	return &types.MsgBuyLotteryResponse{}, nil
}
