package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"lottery/x/lottery/types"
)

func (k msgServer) CreateBet(goCtx context.Context, msg *types.MsgCreateBet) (*types.MsgCreateBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBet(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var bet = types.Bet{
		Creator:  msg.Creator,
		Index:    msg.Index,
		BetSize:  msg.BetSize,
		BetIndex: msg.BetIndex,
	}

	k.SetBet(
		ctx,
		bet,
	)
	return &types.MsgCreateBetResponse{}, nil
}

func (k msgServer) UpdateBet(goCtx context.Context, msg *types.MsgUpdateBet) (*types.MsgUpdateBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBet(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var bet = types.Bet{
		Creator:  msg.Creator,
		Index:    msg.Index,
		BetSize:  msg.BetSize,
		BetIndex: msg.BetIndex,
	}

	k.SetBet(ctx, bet)

	return &types.MsgUpdateBetResponse{}, nil
}

func (k msgServer) DeleteBet(goCtx context.Context, msg *types.MsgDeleteBet) (*types.MsgDeleteBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBet(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBet(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteBetResponse{}, nil
}
