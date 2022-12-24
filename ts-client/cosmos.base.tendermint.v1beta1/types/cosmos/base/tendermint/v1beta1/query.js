"use strict";
exports.__esModule = true;
exports.ServiceClientImpl = exports.ProofOps = exports.ProofOp = exports.ABCIQueryResponse = exports.ABCIQueryRequest = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
var any_1 = require("../../../../google/protobuf/any");
var types_1 = require("../../../../tendermint/p2p/types");
var block_1 = require("../../../../tendermint/types/block");
var types_2 = require("../../../../tendermint/types/types");
var pagination_1 = require("../../query/v1beta1/pagination");
var types_3 = require("./types");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return { height: 0, pagination: undefined };
}
exports.GetValidatorSetByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? Number(object.height) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetValidatorSetByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    }
};
function createBaseGetValidatorSetByHeightResponse() {
    return { blockHeight: 0, validators: [], pagination: undefined };
}
exports.GetValidatorSetByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.blockHeight !== 0) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    }
};
function createBaseGetLatestValidatorSetRequest() {
    return { pagination: undefined };
}
exports.GetLatestValidatorSetRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestValidatorSetRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestValidatorSetRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    }
};
function createBaseGetLatestValidatorSetResponse() {
    return { blockHeight: 0, validators: [], pagination: undefined };
}
exports.GetLatestValidatorSetResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.blockHeight !== 0) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : 0;
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    }
};
function createBaseValidator() {
    return { address: "", pubKey: undefined, votingPower: 0, proposerPriority: 0 };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
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
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
            proposerPriority: isSet(object.proposerPriority) ? Number(object.proposerPriority) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = Math.round(message.votingPower));
        message.proposerPriority !== undefined && (obj.proposerPriority = Math.round(message.proposerPriority));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? any_1.Any.fromPartial(object.pubKey)
            : undefined;
        message.votingPower = (_b = object.votingPower) !== null && _b !== void 0 ? _b : 0;
        message.proposerPriority = (_c = object.proposerPriority) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseGetBlockByHeightRequest() {
    return { height: 0 };
}
exports.GetBlockByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { height: isSet(object.height) ? Number(object.height) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseGetBlockByHeightResponse() {
    return { blockId: undefined, block: undefined, sdkBlock: undefined };
}
exports.GetBlockByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            types_3.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdkBlock = types_3.Block.decode(reader, reader.uint32());
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
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdkBlock: isSet(object.sdkBlock) ? types_3.Block.fromJSON(object.sdkBlock) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_2.BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? types_3.Block.toJSON(message.sdkBlock) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetBlockByHeightResponse();
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
            ? types_3.Block.fromPartial(object.sdkBlock)
            : undefined;
        return message;
    }
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetLatestBlockRequest();
        return message;
    }
};
function createBaseGetLatestBlockResponse() {
    return { blockId: undefined, block: undefined, sdkBlock: undefined };
}
exports.GetLatestBlockResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            types_3.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdkBlock = types_3.Block.decode(reader, reader.uint32());
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
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdkBlock: isSet(object.sdkBlock) ? types_3.Block.fromJSON(object.sdkBlock) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_2.BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? types_3.Block.toJSON(message.sdkBlock) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestBlockResponse();
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
            ? types_3.Block.fromPartial(object.sdkBlock)
            : undefined;
        return message;
    }
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSyncingRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetSyncingRequest();
        return message;
    }
};
function createBaseGetSyncingResponse() {
    return { syncing: false };
}
exports.GetSyncingResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { syncing: isSet(object.syncing) ? Boolean(object.syncing) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetSyncingResponse();
        message.syncing = (_a = object.syncing) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetNodeInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetNodeInfoRequest();
        return message;
    }
};
function createBaseGetNodeInfoResponse() {
    return { defaultNodeInfo: undefined, applicationVersion: undefined };
}
exports.GetNodeInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.defaultNodeInfo !== undefined) {
            types_1.DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            exports.VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultNodeInfo = types_1.DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationVersion = exports.VersionInfo.decode(reader, reader.uint32());
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
            defaultNodeInfo: isSet(object.defaultNodeInfo) ? types_1.DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
            applicationVersion: isSet(object.applicationVersion)
                ? exports.VersionInfo.fromJSON(object.applicationVersion)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.defaultNodeInfo !== undefined
            && (obj.defaultNodeInfo = message.defaultNodeInfo ? types_1.DefaultNodeInfo.toJSON(message.defaultNodeInfo) : undefined);
        message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion
            ? exports.VersionInfo.toJSON(message.applicationVersion)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetNodeInfoResponse();
        message.defaultNodeInfo = (object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null)
            ? types_1.DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
            : undefined;
        message.applicationVersion = (object.applicationVersion !== undefined && object.applicationVersion !== null)
            ? exports.VersionInfo.fromPartial(object.applicationVersion)
            : undefined;
        return message;
    }
};
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: ""
    };
}
exports.VersionInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== "") {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== "") {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== "") {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== "") {
            writer.uint32(50).string(message.goVersion);
        }
        for (var _i = 0, _a = message.buildDeps; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.appName = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.gitCommit = reader.string();
                    break;
                case 5:
                    message.buildTags = reader.string();
                    break;
                case 6:
                    message.goVersion = reader.string();
                    break;
                case 7:
                    message.buildDeps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmosSdkVersion = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            appName: isSet(object.appName) ? String(object.appName) : "",
            version: isSet(object.version) ? String(object.version) : "",
            gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
            buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
            goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
            buildDeps: Array.isArray(object === null || object === void 0 ? void 0 : object.buildDeps) ? object.buildDeps.map(function (e) { return exports.Module.fromJSON(e); }) : [],
            cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.appName !== undefined && (obj.appName = message.appName);
        message.version !== undefined && (obj.version = message.version);
        message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
        message.buildTags !== undefined && (obj.buildTags = message.buildTags);
        message.goVersion !== undefined && (obj.goVersion = message.goVersion);
        if (message.buildDeps) {
            obj.buildDeps = message.buildDeps.map(function (e) { return e ? exports.Module.toJSON(e) : undefined; });
        }
        else {
            obj.buildDeps = [];
        }
        message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseVersionInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.appName = (_b = object.appName) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.gitCommit = (_d = object.gitCommit) !== null && _d !== void 0 ? _d : "";
        message.buildTags = (_e = object.buildTags) !== null && _e !== void 0 ? _e : "";
        message.goVersion = (_f = object.goVersion) !== null && _f !== void 0 ? _f : "";
        message.buildDeps = ((_g = object.buildDeps) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Module.fromPartial(e); })) || [];
        message.cosmosSdkVersion = (_h = object.cosmosSdkVersion) !== null && _h !== void 0 ? _h : "";
        return message;
    }
};
function createBaseModule() {
    return { path: "", version: "", sum: "" };
}
exports.Module = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
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
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseModule();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.sum = (_c = object.sum) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseABCIQueryRequest() {
    return { data: new Uint8Array(), path: "", height: 0, prove: false };
}
exports.ABCIQueryRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIQueryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = longToNumber(reader.int64());
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            prove: isSet(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined
            && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseABCIQueryRequest();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : 0;
        message.prove = (_d = object.prove) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseABCIQueryResponse() {
    return {
        code: 0,
        log: "",
        info: "",
        index: 0,
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: 0,
        codespace: ""
    };
}
exports.ABCIQueryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== 0) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            exports.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIQueryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = longToNumber(reader.int64());
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = exports.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = longToNumber(reader.int64());
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? Number(object.index) : 0,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            proofOps: isSet(object.proofOps) ? exports.ProofOps.fromJSON(object.proofOps) : undefined,
            height: isSet(object.height) ? Number(object.height) : 0,
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.key !== undefined
            && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined
            && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proofOps !== undefined && (obj.proofOps = message.proofOps ? exports.ProofOps.toJSON(message.proofOps) : undefined);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseABCIQueryResponse();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        message.index = (_d = object.index) !== null && _d !== void 0 ? _d : 0;
        message.key = (_e = object.key) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.value = (_f = object.value) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.proofOps = (object.proofOps !== undefined && object.proofOps !== null)
            ? exports.ProofOps.fromPartial(object.proofOps)
            : undefined;
        message.height = (_g = object.height) !== null && _g !== void 0 ? _g : 0;
        message.codespace = (_h = object.codespace) !== null && _h !== void 0 ? _h : "";
        return message;
    }
};
function createBaseProofOp() {
    return { type: "", key: new Uint8Array(), data: new Uint8Array() };
}
exports.ProofOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProofOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            type: isSet(object.type) ? String(object.type) : "",
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined
            && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined
            && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProofOp();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseProofOps() {
    return { ops: [] };
}
exports.ProofOps = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.ops; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProofOps();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map(function (e) { return exports.ProofOp.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(function (e) { return e ? exports.ProofOp.toJSON(e) : undefined; });
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseProofOps();
        message.ops = ((_a = object.ops) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ProofOp.fromPartial(e); })) || [];
        return message;
    }
};
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.GetNodeInfo = this.GetNodeInfo.bind(this);
        this.GetSyncing = this.GetSyncing.bind(this);
        this.GetLatestBlock = this.GetLatestBlock.bind(this);
        this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
        this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
        this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
        this.ABCIQuery = this.ABCIQuery.bind(this);
    }
    ServiceClientImpl.prototype.GetNodeInfo = function (request) {
        var data = exports.GetNodeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(function (data) { return exports.GetNodeInfoResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.GetSyncing = function (request) {
        var data = exports.GetSyncingRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(function (data) { return exports.GetSyncingResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.GetLatestBlock = function (request) {
        var data = exports.GetLatestBlockRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(function (data) { return exports.GetLatestBlockResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.GetBlockByHeight = function (request) {
        var data = exports.GetBlockByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(function (data) { return exports.GetBlockByHeightResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.GetLatestValidatorSet = function (request) {
        var data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(function (data) { return exports.GetLatestValidatorSetResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.GetValidatorSetByHeight = function (request) {
        var data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(function (data) { return exports.GetValidatorSetByHeightResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    ServiceClientImpl.prototype.ABCIQuery = function (request) {
        var data = exports.ABCIQueryRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
        return promise.then(function (data) { return exports.ABCIQueryResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
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
