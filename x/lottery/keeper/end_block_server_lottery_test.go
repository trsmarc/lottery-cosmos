package keeper_test

import (
	"strconv"
	"testing"

	keeper_test "lottery/testutil/keeper"
	"lottery/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/crypto"
)

var (
	accAddrs = []sdk.AccAddress{
		sdk.AccAddress([]byte("cosmos1cv2tft04hyujecd0nnhfkqx48shkv6rumkzu20")),
		sdk.AccAddress([]byte("cosmos1wrxr5u3mpq7gl0wgget2xwa2dtd5sr483z8jp8")),
		sdk.AccAddress([]byte("cosmos1eefc6cl3djyce4qkmtqapyg2gjf7tc4vpeuxlt")),
		sdk.AccAddress([]byte("cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4")),
		sdk.AccAddress([]byte("cosmos1p5mxm03hzhjp75dtw5z0vntcg7vjxf6fs70fv2")),
		sdk.AccAddress([]byte("cosmos192yvda36gwgvne606ey82h9njztpmm3wa2r7ph")),
		sdk.AccAddress([]byte("cosmos1l4dl4yydsew7lx3f7kp5593j4ahku5d2t7hmhk")),
		sdk.AccAddress([]byte("cosmos1qp67xw7l7cjc329cdks2cq0x84m0ave452xye3")),
		sdk.AccAddress([]byte("cosmos1gsjesc5f20fv6tyeymcnkpwahncg53q7s6pnx5")),
		sdk.AccAddress([]byte("cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd")),
	}
)

func TestSelectLotteryWinner_SuccessNoBet(t *testing.T) {
	lotteryKeeper, ctx, _ := keeper_test.LotteryKeeper(t)
	lotteryKeeper.SelectLotteryWinner(ctx)
}

func TestSelectLotteryWinner_SuccessWithBets(t *testing.T) {
	k, ctx, bankKeeper := keeper_test.LotteryKeeper(t)
	keeper_test.TrackMockBalances(bankKeeper)

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 55)}
	err := bankKeeper.MintCoins(ctx, minttypes.ModuleName, initialCoins)
	require.NoError(t, err)

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	require.EqualValues(t, initialCoins.String(),
		bankKeeper.GetAllBalances(ctx, moduleAcct).String())
	for i := 0; i < types.LotteryBetThreshold; i++ {
		bet := sdk.Coins{sdk.NewInt64Coin("token", int64(i+1))}
		k.SetBet(ctx,
			types.Bet{
				Index:    string(accAddrs[i]),
				Creator:  string(accAddrs[i]),
				BetSize:  bet.String(),
				BetIndex: strconv.Itoa(i),
			})
	}

	expectedRecord := types.LotteryRecord{
		Id:            0x0,
		WinnerIndex:   "9",
		WinnerAddress: "cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd",
		WinnerType:    "highest-bet-win",
		Reward:        "55token",
	}

	bets := k.GetAllBet(ctx)
	require.EqualValues(t,
		[]types.Bet{
			{
				Index:    "cosmos192yvda36gwgvne606ey82h9njztpmm3wa2r7ph",
				BetSize:  "6token",
				BetIndex: "5",
				Creator:  "cosmos192yvda36gwgvne606ey82h9njztpmm3wa2r7ph",
			},
			{
				Index:    "cosmos1cv2tft04hyujecd0nnhfkqx48shkv6rumkzu20",
				BetSize:  "1token",
				BetIndex: "0",
				Creator:  "cosmos1cv2tft04hyujecd0nnhfkqx48shkv6rumkzu20",
			},
			{
				Index:    "cosmos1eefc6cl3djyce4qkmtqapyg2gjf7tc4vpeuxlt",
				BetSize:  "3token",
				BetIndex: "2",
				Creator:  "cosmos1eefc6cl3djyce4qkmtqapyg2gjf7tc4vpeuxlt",
			},
			{
				Index:    "cosmos1gsjesc5f20fv6tyeymcnkpwahncg53q7s6pnx5",
				BetSize:  "9token",
				BetIndex: "8",
				Creator:  "cosmos1gsjesc5f20fv6tyeymcnkpwahncg53q7s6pnx5",
			},
			{
				Index:    "cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4",
				BetSize:  "4token",
				BetIndex: "3",
				Creator:  "cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4",
			},
			{
				Index:    "cosmos1l4dl4yydsew7lx3f7kp5593j4ahku5d2t7hmhk",
				BetSize:  "7token",
				BetIndex: "6",
				Creator:  "cosmos1l4dl4yydsew7lx3f7kp5593j4ahku5d2t7hmhk",
			},
			{
				Index:    "cosmos1p5mxm03hzhjp75dtw5z0vntcg7vjxf6fs70fv2",
				BetSize:  "5token",
				BetIndex: "4",
				Creator:  "cosmos1p5mxm03hzhjp75dtw5z0vntcg7vjxf6fs70fv2",
			},
			{
				Index:    "cosmos1qp67xw7l7cjc329cdks2cq0x84m0ave452xye3",
				BetSize:  "8token",
				BetIndex: "7",
				Creator:  "cosmos1qp67xw7l7cjc329cdks2cq0x84m0ave452xye3",
			},
			{
				Index:    "cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd",
				BetSize:  "10token",
				BetIndex: "9",
				Creator:  "cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd",
			},
			{
				Index:    "cosmos1wrxr5u3mpq7gl0wgget2xwa2dtd5sr483z8jp8",
				BetSize:  "2token",
				BetIndex: "1",
				Creator:  "cosmos1wrxr5u3mpq7gl0wgget2xwa2dtd5sr483z8jp8",
			},
		},
		bets,
	)

	k.SelectLotteryWinner(ctx)

	records := k.GetAllLotteryRecord(ctx)

	require.EqualValues(t, 1, len(records))
	require.EqualValues(t, expectedRecord, records[0])

	winnerBalance := bankKeeper.GetAllBalances(
		ctx,
		sdk.MustAccAddressFromBech32(expectedRecord.WinnerAddress),
	)
	require.EqualValues(t, expectedRecord.Reward, winnerBalance.String())
}
