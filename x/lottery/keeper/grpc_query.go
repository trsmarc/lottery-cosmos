package keeper

import (
	"github.com/marktrs/lottery-chain-ignite/x/lottery/types"
)

var _ types.QueryServer = Keeper{}
