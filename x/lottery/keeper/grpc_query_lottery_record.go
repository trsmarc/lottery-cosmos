package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"lottery/x/lottery/types"
)

func (k Keeper) LotteryRecordAll(c context.Context, req *types.QueryAllLotteryRecordRequest) (*types.QueryAllLotteryRecordResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lotteryRecords []types.LotteryRecord
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lotteryRecordStore := prefix.NewStore(store, types.KeyPrefix(types.LotteryRecordKey))

	pageRes, err := query.Paginate(lotteryRecordStore, req.Pagination, func(key []byte, value []byte) error {
		var lotteryRecord types.LotteryRecord
		if err := k.cdc.Unmarshal(value, &lotteryRecord); err != nil {
			return err
		}

		lotteryRecords = append(lotteryRecords, lotteryRecord)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLotteryRecordResponse{LotteryRecord: lotteryRecords, Pagination: pageRes}, nil
}

func (k Keeper) LotteryRecord(c context.Context, req *types.QueryGetLotteryRecordRequest) (*types.QueryGetLotteryRecordResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	lotteryRecord, found := k.GetLotteryRecord(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetLotteryRecordResponse{LotteryRecord: lotteryRecord}, nil
}
