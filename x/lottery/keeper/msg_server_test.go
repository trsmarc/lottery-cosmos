package keeper_test

import (
	"context"
	"testing"

	keeper_test "github.com/marktrs/lottery-chain-ignite/testutil/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	mock "github.com/marktrs/lottery-chain-ignite/testutil/mocks"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context, *mock.MockBankKeeper) {
	k, ctx, bankKeeper := keeper_test.LotteryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx), bankKeeper
}
