package simulation

import (
	"math/rand"

	"github.com/marktrs/lottery-chain-ignite/x/lottery/keeper"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgBuyLottery(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgBuyLottery{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the BuyLottery simulation

		return simtypes.NoOpMsg(
			types.ModuleName,
			msg.Type(),
			"BuyLottery simulation not implemented",
		), nil, nil
	}
}
