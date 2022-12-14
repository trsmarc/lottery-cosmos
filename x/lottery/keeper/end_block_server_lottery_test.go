package keeper_test

import (
	"strconv"
	"testing"

	keeper_test "lottery/testutil/keeper"
	"lottery/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
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
	lotteryKeeper, ctx, bankKeeper := keeper_test.LotteryKeeper(t)
	keeper_test.TrackMockBalances(bankKeeper)

	for i := 0; i < types.LotteryBetThreshold; i++ {
		bet := sdk.Coins{sdk.NewInt64Coin("token", int64(i+1))}
		lotteryKeeper.SetBet(ctx, types.Bet{
			Index:    string(accAddrs[i]),
			Creator:  string(accAddrs[i]),
			BetSize:  bet.String(),
			BetIndex: strconv.Itoa(i),
		})
	}

	lotteryKeeper.SelectLotteryWinner(ctx)
}
