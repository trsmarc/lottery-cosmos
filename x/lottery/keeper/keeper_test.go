package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	keeper_test "github.com/marktrs/lottery-chain-ignite/testutil/keeper"
	testutil "github.com/marktrs/lottery-chain-ignite/testutil/mocks"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"
	"github.com/stretchr/testify/suite"
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

type KeeperTestSuite struct {
	suite.Suite

	lotteryKeeper *keeper.Keeper
	bankKeeper    *testutil.MockBankKeeper
	msgServer     types.MsgServer
	sdkCtx        sdk.Context
	goCtx         context.Context
}

func TestKeeperTestSuite(t *testing.T) {
	suite.Run(t, new(KeeperTestSuite))
}

func (s *KeeperTestSuite) SetupSuite() {
	s.lotteryKeeper, s.sdkCtx, s.bankKeeper = keeper_test.LotteryKeeper(s.T())
	s.msgServer = keeper.NewMsgServerImpl(*s.lotteryKeeper)
	s.goCtx = sdk.WrapSDKContext(s.sdkCtx)
}

func (s *KeeperTestSuite) SetupTest() {
	keeper_test.TrackMockBalances(s.bankKeeper)

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	balance := s.bankKeeper.GetAllBalances(s.sdkCtx, moduleAcct)
	err := s.bankKeeper.BurnCoins(s.sdkCtx, minttypes.ModuleName, balance)

	s.Require().NoError(err)
}

func (s *KeeperTestSuite) TearDownTest() {
	bets := s.lotteryKeeper.GetAllBet(s.sdkCtx)
	for _, bet := range bets {
		s.lotteryKeeper.RemoveBet(s.sdkCtx, bet.Index)
	}
}
