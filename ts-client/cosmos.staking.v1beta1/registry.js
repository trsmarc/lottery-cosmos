"use strict";
exports.__esModule = true;
exports.msgTypes = void 0;
var tx_1 = require("./types/cosmos/staking/v1beta1/tx");
var tx_2 = require("./types/cosmos/staking/v1beta1/tx");
var tx_3 = require("./types/cosmos/staking/v1beta1/tx");
var tx_4 = require("./types/cosmos/staking/v1beta1/tx");
var tx_5 = require("./types/cosmos/staking/v1beta1/tx");
var tx_6 = require("./types/cosmos/staking/v1beta1/tx");
var msgTypes = [
    ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", tx_1.MsgCancelUnbondingDelegation],
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_2.MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgEditValidator", tx_3.MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgDelegate", tx_4.MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgUndelegate", tx_5.MsgUndelegate],
    ["/cosmos.staking.v1beta1.MsgCreateValidator", tx_6.MsgCreateValidator],
];
exports.msgTypes = msgTypes;
