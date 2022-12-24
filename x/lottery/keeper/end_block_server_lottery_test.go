package keeper_test

import (
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	"github.com/tendermint/tendermint/crypto"
)

func (s *KeeperTestSuite) TestSelectLotteryWinner_SuccessNoBet() {
	s.lotteryKeeper.SelectLotteryWinner(s.goCtx)
}

func (s *KeeperTestSuite) TestSelectLotteryWinner_SuccessWithBets() {
	bets := s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(0, len(bets))

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 55)}
	err := s.bankKeeper.MintCoins(s.sdkCtx, minttypes.ModuleName, initialCoins)
	s.Require().NoError(err)

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	s.Require().EqualValues(initialCoins.String(),
		s.bankKeeper.GetAllBalances(s.sdkCtx, moduleAcct).String())
	for i := 0; i < types.LotteryBetThreshold; i++ {
		bet := sdk.Coins{sdk.NewInt64Coin("token", int64(i+1))}
		s.lotteryKeeper.SetBet(s.sdkCtx,
			types.Bet{
				Index:   string(accAddrs[i]),
				Creator: string(accAddrs[i]),
				BetSize: bet.String(),
			})
	}

	expectedRecord := types.LotteryRecord{
		Id:            0x0,
		WinnerIndex:   "4",
		WinnerAddress: "cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4",
		WinnerType:    "normal-bet-win",
		Reward:        "55token",
	}

	bets = s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(
		[]types.Bet{
			{
				Index:   "cosmos192yvda36gwgvne606ey82h9njztpmm3wa2r7ph",
				BetSize: "6token",
				Creator: "cosmos192yvda36gwgvne606ey82h9njztpmm3wa2r7ph",
			},
			{
				Index:   "cosmos1cv2tft04hyujecd0nnhfkqx48shkv6rumkzu20",
				BetSize: "1token",
				Creator: "cosmos1cv2tft04hyujecd0nnhfkqx48shkv6rumkzu20",
			},
			{
				Index:   "cosmos1eefc6cl3djyce4qkmtqapyg2gjf7tc4vpeuxlt",
				BetSize: "3token",
				Creator: "cosmos1eefc6cl3djyce4qkmtqapyg2gjf7tc4vpeuxlt",
			},
			{
				Index:   "cosmos1gsjesc5f20fv6tyeymcnkpwahncg53q7s6pnx5",
				BetSize: "9token",
				Creator: "cosmos1gsjesc5f20fv6tyeymcnkpwahncg53q7s6pnx5",
			},
			{
				Index:   "cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4",
				BetSize: "4token",
				Creator: "cosmos1h6wwwhqsjuh468mm4rjrffd9805hhlmsxp9tq4",
			},
			{
				Index:   "cosmos1l4dl4yydsew7lx3f7kp5593j4ahku5d2t7hmhk",
				BetSize: "7token",
				Creator: "cosmos1l4dl4yydsew7lx3f7kp5593j4ahku5d2t7hmhk",
			},
			{
				Index:   "cosmos1p5mxm03hzhjp75dtw5z0vntcg7vjxf6fs70fv2",
				BetSize: "5token",
				Creator: "cosmos1p5mxm03hzhjp75dtw5z0vntcg7vjxf6fs70fv2",
			},
			{
				Index:   "cosmos1qp67xw7l7cjc329cdks2cq0x84m0ave452xye3",
				BetSize: "8token",
				Creator: "cosmos1qp67xw7l7cjc329cdks2cq0x84m0ave452xye3",
			},
			{
				Index:   "cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd",
				BetSize: "10token",
				Creator: "cosmos1w26v8f23d52yz8nlspt4czfe04e5trt0qmshkd",
			},
			{
				Index:   "cosmos1wrxr5u3mpq7gl0wgget2xwa2dtd5sr483z8jp8",
				BetSize: "2token",
				Creator: "cosmos1wrxr5u3mpq7gl0wgget2xwa2dtd5sr483z8jp8",
			},
		},
		bets,
	)

	s.lotteryKeeper.SelectLotteryWinner(s.goCtx)

	records := s.lotteryKeeper.GetAllLotteryRecord(s.sdkCtx)

	s.Require().EqualValues(1, len(records))
	s.Require().EqualValues(expectedRecord, records[0])

	winnerBalance := s.bankKeeper.GetAllBalances(
		s.sdkCtx,
		sdk.MustAccAddressFromBech32(expectedRecord.WinnerAddress),
	)
	s.Require().EqualValues(expectedRecord.Reward, winnerBalance.String())
}
