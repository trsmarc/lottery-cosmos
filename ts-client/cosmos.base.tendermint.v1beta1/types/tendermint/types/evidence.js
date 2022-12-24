"use strict";
exports.__esModule = true;
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
var timestamp_1 = require("../../google/protobuf/timestamp");
var types_1 = require("./types");
var validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
function createBaseEvidence() {
    return { duplicateVoteEvidence: undefined, lightClientAttackEvidence: undefined };
}
exports.Evidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.duplicateVoteEvidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicateVoteEvidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lightClientAttackEvidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicateVoteEvidence: isSet(object.duplicateVoteEvidence)
                ? exports.DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence)
                : undefined,
            lightClientAttackEvidence: isSet(object.lightClientAttackEvidence)
                ? exports.LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duplicateVoteEvidence !== undefined && (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
            ? exports.DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
            : undefined);
        message.lightClientAttackEvidence !== undefined
            && (obj.lightClientAttackEvidence = message.lightClientAttackEvidence
                ? exports.LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseEvidence();
        message.duplicateVoteEvidence =
            (object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null)
                ? exports.DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence)
                : undefined;
        message.lightClientAttackEvidence =
            (object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null)
                ? exports.LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence)
                : undefined;
        return message;
    }
};
function createBaseDuplicateVoteEvidence() {
    return { voteA: undefined, voteB: undefined, totalVotingPower: 0, validatorPower: 0, timestamp: undefined };
}
exports.DuplicateVoteEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.voteA !== undefined) {
            types_1.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            types_1.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== 0) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (message.validatorPower !== 0) {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteA = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voteB = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = longToNumber(reader.int64());
                    break;
                case 4:
                    message.validatorPower = longToNumber(reader.int64());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            voteA: isSet(object.voteA) ? types_1.Vote.fromJSON(object.voteA) : undefined,
            voteB: isSet(object.voteB) ? types_1.Vote.fromJSON(object.voteB) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? Number(object.totalVotingPower) : 0,
            validatorPower: isSet(object.validatorPower) ? Number(object.validatorPower) : 0,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voteA !== undefined && (obj.voteA = message.voteA ? types_1.Vote.toJSON(message.voteA) : undefined);
        message.voteB !== undefined && (obj.voteB = message.voteB ? types_1.Vote.toJSON(message.voteB) : undefined);
        message.totalVotingPower !== undefined && (obj.totalVotingPower = Math.round(message.totalVotingPower));
        message.validatorPower !== undefined && (obj.validatorPower = Math.round(message.validatorPower));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDuplicateVoteEvidence();
        message.voteA = (object.voteA !== undefined && object.voteA !== null) ? types_1.Vote.fromPartial(object.voteA) : undefined;
        message.voteB = (object.voteB !== undefined && object.voteB !== null) ? types_1.Vote.fromPartial(object.voteB) : undefined;
        message.totalVotingPower = (_a = object.totalVotingPower) !== null && _a !== void 0 ? _a : 0;
        message.validatorPower = (_b = object.validatorPower) !== null && _b !== void 0 ? _b : 0;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    }
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: undefined,
        commonHeight: 0,
        byzantineValidators: [],
        totalVotingPower: 0,
        timestamp: undefined
    };
}
exports.LightClientAttackEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.conflictingBlock !== undefined) {
            types_1.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (message.commonHeight !== 0) {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (var _i = 0, _a = message.byzantineValidators; _i < _a.length; _i++) {
            var v = _a[_i];
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalVotingPower !== 0) {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflictingBlock = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commonHeight = longToNumber(reader.int64());
                    break;
                case 3:
                    message.byzantineValidators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalVotingPower = longToNumber(reader.int64());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            conflictingBlock: isSet(object.conflictingBlock) ? types_1.LightBlock.fromJSON(object.conflictingBlock) : undefined,
            commonHeight: isSet(object.commonHeight) ? Number(object.commonHeight) : 0,
            byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators)
                ? object.byzantineValidators.map(function (e) { return validator_1.Validator.fromJSON(e); })
                : [],
            totalVotingPower: isSet(object.totalVotingPower) ? Number(object.totalVotingPower) : 0,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.conflictingBlock !== undefined
            && (obj.conflictingBlock = message.conflictingBlock ? types_1.LightBlock.toJSON(message.conflictingBlock) : undefined);
        message.commonHeight !== undefined && (obj.commonHeight = Math.round(message.commonHeight));
        if (message.byzantineValidators) {
            obj.byzantineValidators = message.byzantineValidators.map(function (e) { return e ? validator_1.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.byzantineValidators = [];
        }
        message.totalVotingPower !== undefined && (obj.totalVotingPower = Math.round(message.totalVotingPower));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLightClientAttackEvidence();
        message.conflictingBlock = (object.conflictingBlock !== undefined && object.conflictingBlock !== null)
            ? types_1.LightBlock.fromPartial(object.conflictingBlock)
            : undefined;
        message.commonHeight = (_a = object.commonHeight) !== null && _a !== void 0 ? _a : 0;
        message.byzantineValidators = ((_b = object.byzantineValidators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return validator_1.Validator.fromPartial(e); })) || [];
        message.totalVotingPower = (_c = object.totalVotingPower) !== null && _c !== void 0 ? _c : 0;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseEvidenceList() {
    return { evidence: [] };
}
exports.EvidenceList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.evidence; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(function (e) { return exports.Evidence.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(function (e) { return e ? exports.Evidence.toJSON(e) : undefined; });
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEvidenceList();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Evidence.fromPartial(e); })) || [];
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
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
