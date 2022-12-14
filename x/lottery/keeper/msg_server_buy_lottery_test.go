package keeper_test

import (
	test_constant "lottery/testutil/constants"
	keeper_test "lottery/testutil/keeper"
	"lottery/x/lottery/types"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	"github.com/stretchr/testify/require"
)

var (
	c1 = test_constant.Client1
)

func TestBuyLottery_Success(t *testing.T) {
	msgServer, context, bankKeeper := setupMsgServer(t)
	keeper_test.TrackMockBalances(bankKeeper)
	ctx := sdk.UnwrapSDKContext(context)

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 6)}
	err := bankKeeper.MintCoins(ctx, minttypes.ModuleName, initialCoins)
	require.NoError(t, err)

	buyer, err := sdk.AccAddressFromBech32(c1)
	require.NoError(t, err)

	err = bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, initialCoins)
	require.NoError(t, err)

	buyerBalance := bankKeeper.GetAllBalances(ctx, buyer)
	require.EqualValues(t, buyerBalance.String(), "6token")

	createResponse, err := msgServer.BuyLottery(context, &types.MsgBuyLottery{
		Creator: c1,
		BetSize: "1token",
		Fee:     "5token",
	})

	require.NoError(t, err)
	require.EqualValues(t, types.MsgBuyLotteryResponse{}, *createResponse)

	buyerBalance = bankKeeper.GetAllBalances(ctx, buyer)
	require.EqualValues(t, buyerBalance.String(), "")
}

func TestBuyLottery_InsufficientFund(t *testing.T) {
	msgServer, context, bankKeeper := setupMsgServer(t)
	keeper_test.TrackMockBalances(bankKeeper)
	ctx := sdk.UnwrapSDKContext(context)

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 5)}
	err := bankKeeper.MintCoins(ctx, minttypes.ModuleName, initialCoins)
	require.NoError(t, err)

	buyer, err := sdk.AccAddressFromBech32(c1)
	require.NoError(t, err)

	err = bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, initialCoins)
	require.NoError(t, err)

	_, err = msgServer.BuyLottery(context, &types.MsgBuyLottery{
		Creator: c1,
		BetSize: "1token",
		Fee:     "5token",
	})
	require.EqualError(t, err, "not enough balance")
}

func TestBuyLottery_InsufficientFee(t *testing.T) {
	msgServer, context, _ := setupMsgServer(t)
	_, err := msgServer.BuyLottery(context, &types.MsgBuyLottery{
		Creator: c1,
		BetSize: "1token",
		Fee:     "4token",
	})
	require.EqualError(t, err, "Lottery fee is 5token received 4token: invalid request")
}

func TestBuyLottery_FailedMinimumBet(t *testing.T) {
	msgServer, context, _ := setupMsgServer(t)
	_, err := msgServer.BuyLottery(context, &types.MsgBuyLottery{
		Creator: c1,
		BetSize: "0token",
		Fee:     "5token",
	})
	require.EqualError(t, err, "Bet size can be 1token to 100token received : invalid request")
}

func TestBuyLottery_FailedMaximumBet(t *testing.T) {
	msgServer, context, _ := setupMsgServer(t)
	_, err := msgServer.BuyLottery(context, &types.MsgBuyLottery{
		Creator: c1,
		BetSize: "101token",
		Fee:     "5token",
	})

	require.EqualError(
		t,
		err,
		"Bet size can be 1token to 100token received 101token: invalid request",
	)
}
