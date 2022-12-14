package keeper_test

import (
	"context"
	"testing"

	keeper_test "lottery/testutil/keeper"
	"lottery/x/lottery/keeper"
	"lottery/x/lottery/types"

	mock "lottery/testutil/mocks"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context, *mock.MockBankKeeper) {
	k, ctx, bankKeeper := keeper_test.LotteryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx), bankKeeper
}
