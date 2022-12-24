"use strict";
exports.__esModule = true;
exports.LastValidatorPower = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
var staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        for (var _i = 0, _a = message.lastValidatorPowers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.validators; _b < _c.length; _b++) {
            var v = _c[_b];
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegations; _d < _e.length; _d++) {
            var v = _e[_d];
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.unbondingDelegations; _f < _g.length; _f++) {
            var v = _g[_f];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _h = 0, _j = message.redelegations; _h < _j.length; _h++) {
            var v = _j[_h];
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastTotalPower = reader.bytes();
                    break;
                case 3:
                    message.lastValidatorPowers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbondingDelegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            params: isSet(object.params) ? staking_1.Params.fromJSON(object.params) : undefined,
            lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
            lastValidatorPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.lastValidatorPowers)
                ? object.lastValidatorPowers.map(function (e) { return exports.LastValidatorPower.fromJSON(e); })
                : [],
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return staking_1.Validator.fromJSON(e); }) : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(function (e) { return staking_1.Delegation.fromJSON(e); }) : [],
            unbondingDelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingDelegations)
                ? object.unbondingDelegations.map(function (e) { return staking_1.UnbondingDelegation.fromJSON(e); })
                : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations)
                ? object.redelegations.map(function (e) { return staking_1.Redelegation.fromJSON(e); })
                : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        message.lastTotalPower !== undefined
            && (obj.lastTotalPower = base64FromBytes(message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array()));
        if (message.lastValidatorPowers) {
            obj.lastValidatorPowers = message.lastValidatorPowers.map(function (e) { return e ? exports.LastValidatorPower.toJSON(e) : undefined; });
        }
        else {
            obj.lastValidatorPowers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? staking_1.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) { return e ? staking_1.Delegation.toJSON(e) : undefined; });
        }
        else {
            obj.delegations = [];
        }
        if (message.unbondingDelegations) {
            obj.unbondingDelegations = message.unbondingDelegations.map(function (e) { return e ? staking_1.UnbondingDelegation.toJSON(e) : undefined; });
        }
        else {
            obj.unbondingDelegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(function (e) { return e ? staking_1.Redelegation.toJSON(e) : undefined; });
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? staking_1.Params.fromPartial(object.params)
            : undefined;
        message.lastTotalPower = (_a = object.lastTotalPower) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.lastValidatorPowers = ((_b = object.lastValidatorPowers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.LastValidatorPower.fromPartial(e); })) || [];
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.delegations = ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_1.Delegation.fromPartial(e); })) || [];
        message.unbondingDelegations = ((_e = object.unbondingDelegations) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.redelegations = ((_f = object.redelegations) === null || _f === void 0 ? void 0 : _f.map(function (e) { return staking_1.Redelegation.fromPartial(e); })) || [];
        message.exported = (_g = object.exported) !== null && _g !== void 0 ? _g : false;
        return message;
    }
};
function createBaseLastValidatorPower() {
    return { address: "", power: 0 };
}
exports.LastValidatorPower = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            power: isSet(object.power) ? Number(object.power) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = Math.round(message.power));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLastValidatorPower();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.power = (_b = object.power) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
