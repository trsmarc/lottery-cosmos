"use strict";
exports.__esModule = true;
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
var keys_1 = require("../crypto/keys");
exports.protobufPackage = "tendermint.types";
function createBaseValidatorSet() {
    return { validators: [], proposer: undefined, totalVotingPower: 0 };
}
exports.ValidatorSet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== 0) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = longToNumber(reader.int64());
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            proposer: isSet(object.proposer) ? exports.Validator.fromJSON(object.proposer) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? Number(object.totalVotingPower) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined
            && (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
        message.totalVotingPower !== undefined && (obj.totalVotingPower = Math.round(message.totalVotingPower));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorSet();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.proposer = (object.proposer !== undefined && object.proposer !== null)
            ? exports.Validator.fromPartial(object.proposer)
            : undefined;
        message.totalVotingPower = (_b = object.totalVotingPower) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseValidator() {
    return { address: new Uint8Array(), pubKey: undefined, votingPower: 0, proposerPriority: 0 };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== 0) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== 0) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPower = longToNumber(reader.int64());
                    break;
                case 4:
                    message.proposerPriority = longToNumber(reader.int64());
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
            proposerPriority: isSet(object.proposerPriority) ? Number(object.proposerPriority) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined
            && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = Math.round(message.votingPower));
        message.proposerPriority !== undefined && (obj.proposerPriority = Math.round(message.proposerPriority));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? keys_1.PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.votingPower = (_b = object.votingPower) !== null && _b !== void 0 ? _b : 0;
        message.proposerPriority = (_c = object.proposerPriority) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseSimpleValidator() {
    return { pubKey: undefined, votingPower: 0 };
}
exports.SimpleValidator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.votingPower !== 0) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimpleValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.votingPower = longToNumber(reader.int64());
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
            pubKey: isSet(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = Math.round(message.votingPower));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSimpleValidator();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? keys_1.PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.votingPower = (_a = object.votingPower) !== null && _a !== void 0 ? _a : 0;
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
