package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyLottery = "buy_lottery"

var _ sdk.Msg = &MsgBuyLottery{}

func NewMsgBuyLottery(creator string, fee string, betSize string) *MsgBuyLottery {
	return &MsgBuyLottery{
		Creator: creator,
		Fee:     fee,
		BetSize: betSize,
	}
}

func (msg *MsgBuyLottery) Route() string {
	return RouterKey
}

func (msg *MsgBuyLottery) Type() string {
	return TypeMsgBuyLottery
}

func (msg *MsgBuyLottery) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyLottery) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyLottery) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
