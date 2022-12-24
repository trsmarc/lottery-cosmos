"use strict";
exports.__esModule = true;
exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = require("protobufjs/minimal");
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return { spendLimit: [] };
}
exports.SendAuthorization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.spendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spendLimit) ? object.spendLimit.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.spendLimit = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSendAuthorization();
        message.spendLimit = ((_a = object.spendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
