package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "lottery/testutil/keeper"
	"lottery/x/lottery/keeper"
	"lottery/x/lottery/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestBetMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.LotteryKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBet{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateBet(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBet(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestBetMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBet
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBet{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBet{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBet{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.LotteryKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBet{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateBet(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBet(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBet(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestBetMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBet
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBet{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBet{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBet{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.LotteryKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBet(wctx, &types.MsgCreateBet{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBet(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBet(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
