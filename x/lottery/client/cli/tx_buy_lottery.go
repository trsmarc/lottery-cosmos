package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"
)

var _ = strconv.Itoa(0)

func CmdBuyLottery() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buy-lottery [fee] [bet-size]",
		Short: "Broadcast message buy-lottery",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFee := args[0]
			argBetSize := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBuyLottery(
				clientCtx.GetFromAddress().String(),
				argFee,
				argBetSize,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
