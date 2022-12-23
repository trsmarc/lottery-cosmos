package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBet = "create_bet"
	TypeMsgUpdateBet = "update_bet"
	TypeMsgDeleteBet = "delete_bet"
)

var _ sdk.Msg = &MsgCreateBet{}

func NewMsgCreateBet(
	creator string,
	index string,
	betSize string,

) *MsgCreateBet {
	return &MsgCreateBet{
		Creator: creator,
		Index:   index,
		BetSize: betSize,
	}
}

func (msg *MsgCreateBet) Route() string {
	return RouterKey
}

func (msg *MsgCreateBet) Type() string {
	return TypeMsgCreateBet
}

func (msg *MsgCreateBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBet{}

func NewMsgUpdateBet(
	creator string,
	index string,
	betSize string,
) *MsgUpdateBet {
	return &MsgUpdateBet{
		Creator: creator,
		Index:   index,
		BetSize: betSize,
	}
}

func (msg *MsgUpdateBet) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBet) Type() string {
	return TypeMsgUpdateBet
}

func (msg *MsgUpdateBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBet{}

func NewMsgDeleteBet(
	creator string,
	index string,

) *MsgDeleteBet {
	return &MsgDeleteBet{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBet) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBet) Type() string {
	return TypeMsgDeleteBet
}

func (msg *MsgDeleteBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
