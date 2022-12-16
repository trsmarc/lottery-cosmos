package keeper_test

import (
	"testing"

	testkeeper "github.com/marktrs/lottery-chain-ignite/testutil/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx, _ := testkeeper.LotteryKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	params := types.DefaultParams()
	keeper.SetParams(ctx, params)

	response, err := keeper.Params(wctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
