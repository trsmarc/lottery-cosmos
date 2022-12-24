package keeper_test

import (
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
)

func (s *KeeperTestSuite) TestBuyLottery_Success() {
	bets := s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(0, len(bets))

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 6)}
	err := s.bankKeeper.MintCoins(s.sdkCtx, minttypes.ModuleName, initialCoins)
	s.Require().NoError(err)

	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	err = s.bankKeeper.SendCoinsFromModuleToAccount(s.sdkCtx, types.ModuleName, buyer, initialCoins)
	s.Require().NoError(err)

	buyerBalance := s.bankKeeper.GetAllBalances(s.sdkCtx, buyer)

	s.Require().EqualValues("6token", buyerBalance.String())

	createResponse, err := s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "1token",
		Fee:     "5token",
	})

	s.Require().NoError(err)
	s.Require().EqualValues(types.MsgBuyLotteryResponse{}, *createResponse)

	bets = s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(1, len(bets))

	buyerBalance = s.bankKeeper.GetAllBalances(s.sdkCtx, buyer)
	s.Require().EqualValues("", buyerBalance.String())
}

func (s *KeeperTestSuite) TestBuyLottery_Success_ReEntry() {
	bets := s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(0, len(bets))

	initialCoins := sdk.Coins{sdk.NewInt64Coin("token", 12)}
	err := s.bankKeeper.MintCoins(s.sdkCtx, minttypes.ModuleName, initialCoins)
	s.Require().NoError(err)

	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	err = s.bankKeeper.SendCoinsFromModuleToAccount(s.sdkCtx, types.ModuleName, buyer, initialCoins)
	s.Require().NoError(err)

	buyerBalance := s.bankKeeper.GetAllBalances(s.sdkCtx, buyer)

	s.Require().EqualValues("12token", buyerBalance.String())

	createResponse, err := s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "1token",
		Fee:     "5token",
	})

	s.Require().NoError(err)
	s.Require().EqualValues(types.MsgBuyLotteryResponse{}, *createResponse)

	bets = s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(1, len(bets))

	buyerBalance = s.bankKeeper.GetAllBalances(s.sdkCtx, buyer)
	s.Require().EqualValues("6token", buyerBalance.String())

	createResponse2, err := s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "1token",
		Fee:     "5token",
	})

	buyerBalance = s.bankKeeper.GetAllBalances(s.sdkCtx, buyer)
	s.Require().EqualValues(buyerBalance.String(), "1token")

	s.Require().NoError(err)
	s.Require().EqualValues(types.MsgBuyLotteryResponse{}, *createResponse2)

	bets = s.lotteryKeeper.GetAllBet(s.sdkCtx)
	s.Require().EqualValues(1, len(bets))
}

func (s *KeeperTestSuite) TestBuyLottery_InsufficientFund() {
	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	_, err = s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "1token",
		Fee:     "5token",
	})
	s.Require().EqualError(err, "not enough balance")
}

func (s *KeeperTestSuite) TestBuyLottery_InsufficientFee() {
	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	_, err = s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "1token",
		Fee:     "4token",
	})
	s.Require().EqualError(err, "Lottery fee is 5token received 4token: invalid request")
}

func (s *KeeperTestSuite) TestBuyLottery_FailedMinimumBet() {
	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	_, err = s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "0token",
		Fee:     "5token",
	})
	s.Require().EqualError(err, "Bet size can be 1token to 100token received : invalid request")
}

func (s *KeeperTestSuite) TestBuyLottery_FailedMaximumBet() {
	buyer := accAddrs[0]
	buyerAddress, err := sdk.AccAddressFromBech32(buyer.String())
	s.Require().NoError(err)

	_, err = s.msgServer.BuyLottery(s.goCtx, &types.MsgBuyLottery{
		Creator: buyerAddress.String(),
		BetSize: "101token",
		Fee:     "5token",
	})

	s.Require().EqualError(
		err,
		"Bet size can be 1token to 100token received 101token: invalid request",
	)
}
