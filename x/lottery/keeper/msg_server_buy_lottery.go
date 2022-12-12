package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"lottery/x/lottery/types"
)

func (k msgServer) BuyLottery(goCtx context.Context, msg *types.MsgBuyLottery) (*types.MsgBuyLotteryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyLotteryResponse{}, nil
}
