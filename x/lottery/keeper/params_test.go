package keeper_test

import (
	"testing"

	testkeeper "github.com/marktrs/lottery-chain-ignite/testutil/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx, _ := testkeeper.LotteryKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
