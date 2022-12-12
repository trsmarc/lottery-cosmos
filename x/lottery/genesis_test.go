package lottery_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "lottery/testutil/keeper"
	"lottery/testutil/nullify"
	"lottery/x/lottery"
	"lottery/x/lottery/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BetList: []types.Bet{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LotteryKeeper(t)
	lottery.InitGenesis(ctx, *k, genesisState)
	got := lottery.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BetList, got.BetList)
	// this line is used by starport scaffolding # genesis/test/assert
}
