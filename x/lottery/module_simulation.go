package lottery

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/marktrs/lottery-chain-ignite/testutil/sample"
	lotterysimulation "github.com/marktrs/lottery-chain-ignite/x/lottery/simulation"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = lotterysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgBuyLottery = "op_weight_msg_buy_lottery"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyLottery int = 100

	opWeightMsgCreateBet = "op_weight_msg_bet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBet int = 100

	opWeightMsgUpdateBet = "op_weight_msg_bet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBet int = 100

	opWeightMsgDeleteBet = "op_weight_msg_bet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBet int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	lotteryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BetList: []types.Bet{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&lotteryGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgBuyLottery int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyLottery, &weightMsgBuyLottery, nil,
		func(_ *rand.Rand) {
			weightMsgBuyLottery = defaultWeightMsgBuyLottery
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyLottery,
		lotterysimulation.SimulateMsgBuyLottery(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateBet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBet, &weightMsgCreateBet, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBet = defaultWeightMsgCreateBet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBet,
		lotterysimulation.SimulateMsgCreateBet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBet, &weightMsgUpdateBet, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBet = defaultWeightMsgUpdateBet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBet,
		lotterysimulation.SimulateMsgUpdateBet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBet, &weightMsgDeleteBet, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBet = defaultWeightMsgDeleteBet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBet,
		lotterysimulation.SimulateMsgDeleteBet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
