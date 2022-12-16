package lottery_test

import (
	"testing"

	keeper_test "github.com/marktrs/lottery-chain-ignite/testutil/keeper"
	"github.com/marktrs/lottery-chain-ignite/testutil/nullify"
	"github.com/marktrs/lottery-chain-ignite/x/lottery"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	"github.com/stretchr/testify/require"
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
		LotteryRecordList: []types.LotteryRecord{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		LotteryRecordCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx, _ := keeper_test.LotteryKeeper(t)
	lottery.InitGenesis(ctx, *k, genesisState)
	got := lottery.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BetList, got.BetList)
	require.ElementsMatch(t, genesisState.LotteryRecordList, got.LotteryRecordList)
	require.Equal(t, genesisState.LotteryRecordCount, got.LotteryRecordCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
