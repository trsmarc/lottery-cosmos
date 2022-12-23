package keeper

import (
	"fmt"
	"testing"

	mock "github.com/marktrs/lottery-chain-ignite/testutil/mocks"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/store"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	typesparams "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/crypto"
	"github.com/tendermint/tendermint/libs/log"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmdb "github.com/tendermint/tm-db"
)

func LotteryKeeper(t testing.TB) (*keeper.Keeper, sdk.Context, *mock.MockBankKeeper) {
	storeKey := sdk.NewKVStoreKey(types.StoreKey)
	memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)

	db := tmdb.NewMemDB()
	stateStore := store.NewCommitMultiStore(db)
	stateStore.MountStoreWithDB(storeKey, storetypes.StoreTypeIAVL, db)
	stateStore.MountStoreWithDB(memStoreKey, storetypes.StoreTypeMemory, nil)
	require.NoError(t, stateStore.LoadLatestVersion())

	registry := codectypes.NewInterfaceRegistry()
	cdc := codec.NewProtoCodec(registry)

	// gomock initializations
	ctrl := gomock.NewController(t)
	bankKeeper := mock.NewMockBankKeeper(ctrl)
	paramsSubspace := typesparams.NewSubspace(cdc,
		types.Amino,
		storeKey,
		memStoreKey,
		"LotteryParams",
	)
	k := keeper.NewKeeper(
		cdc,
		storeKey,
		memStoreKey,
		paramsSubspace,
		bankKeeper,
	)

	ctx := sdk.NewContext(stateStore, tmproto.Header{}, false, log.NewNopLogger())

	// Initialize params
	k.SetParams(ctx, types.DefaultParams())

	return k, ctx, bankKeeper
}

// TrackMockBalances sets up expected calls on the Mock BankKeeper, and also
// locally tracks accounts balances (not modules balances).
func TrackMockBalances(bankKeeper *mock.MockBankKeeper) {
	balances := make(map[string]sdk.Coins)
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	bankKeeper.EXPECT().
		MintCoins(gomock.Any(), minttypes.ModuleName, gomock.Any()).
		DoAndReturn(func(_ sdk.Context, module string, coins sdk.Coins) error {
			balances[moduleAcct.String()] = balances[moduleAcct.String()].Add(coins...)
			return nil
		}).
		AnyTimes()
	bankKeeper.EXPECT().
		BurnCoins(gomock.Any(), minttypes.ModuleName, gomock.Any()).
		DoAndReturn(func(_ sdk.Context, module string, coins sdk.Coins) error {
			balances[moduleAcct.String()] = balances[moduleAcct.String()].Sub(coins...)
			return nil
		}).
		AnyTimes()
	bankKeeper.EXPECT().
		SendCoinsFromAccountToModule(gomock.Any(), gomock.Any(), types.ModuleName, gomock.Any()).
		DoAndReturn(func(_ sdk.Context, sender sdk.AccAddress, _ string, coins sdk.Coins) error {
			newBalance, negative := balances[sender.String()].SafeSub(coins...)
			if negative {
				return fmt.Errorf("not enough balance")
			}
			balances[sender.String()] = newBalance
			return nil
		}).
		AnyTimes()
	bankKeeper.EXPECT().
		SendCoinsFromModuleToAccount(gomock.Any(), gomock.Any(), gomock.Any(), gomock.Any()).
		DoAndReturn(func(_ sdk.Context, module string, rcpt sdk.AccAddress, coins sdk.Coins) error {
			balances[rcpt.String()] = balances[rcpt.String()].Add(coins...)
			return nil
		}).
		AnyTimes()
	bankKeeper.EXPECT().
		GetAllBalances(gomock.Any(), gomock.Any()).
		DoAndReturn(func(_ sdk.Context, addr sdk.AccAddress) sdk.Coins {
			return balances[addr.String()]
		}).
		AnyTimes()
}
