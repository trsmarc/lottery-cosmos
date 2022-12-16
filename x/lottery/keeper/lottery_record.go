package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"
)

// GetLotteryRecordCount get the total number of lotteryRecord
func (k Keeper) GetLotteryRecordCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.LotteryRecordCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetLotteryRecordCount set the total number of lotteryRecord
func (k Keeper) SetLotteryRecordCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.LotteryRecordCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendLotteryRecord appends a lotteryRecord in the store with a new id and update the count
func (k Keeper) AppendLotteryRecord(
	ctx sdk.Context,
	lotteryRecord types.LotteryRecord,
) uint64 {
	// Create the lotteryRecord
	count := k.GetLotteryRecordCount(ctx)

	// Set the ID of the appended value
	lotteryRecord.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LotteryRecordKey))
	appendedValue := k.cdc.MustMarshal(&lotteryRecord)
	store.Set(GetLotteryRecordIDBytes(lotteryRecord.Id), appendedValue)

	// Update lotteryRecord count
	k.SetLotteryRecordCount(ctx, count+1)

	return count
}

// SetLotteryRecord set a specific lotteryRecord in the store
func (k Keeper) SetLotteryRecord(ctx sdk.Context, lotteryRecord types.LotteryRecord) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LotteryRecordKey))
	b := k.cdc.MustMarshal(&lotteryRecord)
	store.Set(GetLotteryRecordIDBytes(lotteryRecord.Id), b)
}

// GetLotteryRecord returns a lotteryRecord from its id
func (k Keeper) GetLotteryRecord(ctx sdk.Context, id uint64) (val types.LotteryRecord, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LotteryRecordKey))
	b := store.Get(GetLotteryRecordIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLotteryRecord removes a lotteryRecord from the store
func (k Keeper) RemoveLotteryRecord(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LotteryRecordKey))
	store.Delete(GetLotteryRecordIDBytes(id))
}

// GetAllLotteryRecord returns all lotteryRecord
func (k Keeper) GetAllLotteryRecord(ctx sdk.Context) (list []types.LotteryRecord) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LotteryRecordKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LotteryRecord
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetLotteryRecordIDBytes returns the byte representation of the ID
func GetLotteryRecordIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetLotteryRecordIDFromBytes returns ID in uint64 format from a byte array
func GetLotteryRecordIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
