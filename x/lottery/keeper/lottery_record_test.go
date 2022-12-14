package keeper_test

import (
	"testing"

	keepertest "lottery/testutil/keeper"
	"lottery/testutil/nullify"
	"lottery/x/lottery/keeper"
	"lottery/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNLotteryRecord(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LotteryRecord {
	items := make([]types.LotteryRecord, n)
	for i := range items {
		items[i].Id = keeper.AppendLotteryRecord(ctx, items[i])
	}
	return items
}

func TestLotteryRecordGet(t *testing.T) {
	keeper, ctx, _ := keepertest.LotteryKeeper(t)
	items := createNLotteryRecord(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetLotteryRecord(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestLotteryRecordRemove(t *testing.T) {
	keeper, ctx, _ := keepertest.LotteryKeeper(t)
	items := createNLotteryRecord(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLotteryRecord(ctx, item.Id)
		_, found := keeper.GetLotteryRecord(ctx, item.Id)
		require.False(t, found)
	}
}

func TestLotteryRecordGetAll(t *testing.T) {
	keeper, ctx, _ := keepertest.LotteryKeeper(t)
	items := createNLotteryRecord(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLotteryRecord(ctx)),
	)
}

func TestLotteryRecordCount(t *testing.T) {
	keeper, ctx, _ := keepertest.LotteryKeeper(t)
	items := createNLotteryRecord(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetLotteryRecordCount(ctx))
}
