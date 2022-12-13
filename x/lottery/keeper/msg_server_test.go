package keeper_test

import (
	"context"
	"testing"

	keepertest "lottery/testutil/keeper"
	"lottery/x/lottery/keeper"
	"lottery/x/lottery/types"

	mock "lottery/testutil/mocks"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context, *mock.MockBankKeeper) {
	k, ctx, bankKeeper := keepertest.LotteryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx), bankKeeper
}
