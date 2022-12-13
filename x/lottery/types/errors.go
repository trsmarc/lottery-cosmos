package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/lottery module sentinel errors
var (
	ErrInvalidLotteryFee = sdkerrors.Register(ModuleName, 1100, "Lottery fee is %s received %s")
	ErrInvalidBetSize    = sdkerrors.Register(ModuleName, 1101, "Bet size can be %s to %s received %s")
)
