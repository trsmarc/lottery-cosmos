"use strict";
// Generated by Ignite ignite.com/cli
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.queryClient = exports.txClient = exports.registry = exports.MsgSend = exports.MsgMultiSend = void 0;
var stargate_1 = require("@cosmjs/stargate");
var proto_signing_1 = require("@cosmjs/proto-signing");
var registry_1 = require("./registry");
var rest_1 = require("./rest");
var tx_1 = require("./types/cosmos/bank/v1beta1/tx");
exports.MsgMultiSend = tx_1.MsgMultiSend;
var tx_2 = require("./types/cosmos/bank/v1beta1/tx");
exports.MsgSend = tx_2.MsgSend;
var types_1 = require("./types");
var types_2 = require("./types");
var types_3 = require("./types");
var types_4 = require("./types");
var types_5 = require("./types");
var types_6 = require("./types");
var types_7 = require("./types");
var types_8 = require("./types");
var types_9 = require("./types");
var types_10 = require("./types");
exports.registry = new proto_signing_1.Registry(registry_1.msgTypes);
function getStructure(template) {
    var structure = { fields: [] };
    for (var _i = 0, _a = Object.entries(template); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
var defaultFee = {
    amount: [],
    gas: "200000"
};
var txClient = function (_a) {
    var _b = _a === void 0 ? { addr: "http://localhost:26657", prefix: "cosmos" } : _a, signer = _b.signer, prefix = _b.prefix, addr = _b.addr;
    return {
        sendMsgMultiSend: function (_a) {
            var value = _a.value, fee = _a.fee, memo = _a.memo;
            return __awaiter(this, void 0, void 0, function () {
                var address, signingClient, msg, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!signer) {
                                throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Signer is not present.');
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, signer.getAccounts()];
                        case 2:
                            address = (_b.sent())[0].address;
                            return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(addr, signer, { registry: exports.registry, prefix: prefix })];
                        case 3:
                            signingClient = _b.sent();
                            msg = this.msgMultiSend({ value: tx_1.MsgMultiSend.fromPartial(value) });
                            return [4 /*yield*/, signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5:
                            e_1 = _b.sent();
                            throw new Error('TxClient:sendMsgMultiSend: Could not broadcast Tx: ' + e_1.message);
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        sendMsgSend: function (_a) {
            var value = _a.value, fee = _a.fee, memo = _a.memo;
            return __awaiter(this, void 0, void 0, function () {
                var address, signingClient, msg, e_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!signer) {
                                throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.');
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, signer.getAccounts()];
                        case 2:
                            address = (_b.sent())[0].address;
                            return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(addr, signer, { registry: exports.registry, prefix: prefix })];
                        case 3:
                            signingClient = _b.sent();
                            msg = this.msgSend({ value: tx_2.MsgSend.fromPartial(value) });
                            return [4 /*yield*/, signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5:
                            e_2 = _b.sent();
                            throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: ' + e_2.message);
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        msgMultiSend: function (_a) {
            var value = _a.value;
            try {
                return { typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend", value: tx_1.MsgMultiSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgMultiSend: Could not create message: ' + e.message);
            }
        },
        msgSend: function (_a) {
            var value = _a.value;
            try {
                return { typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: tx_2.MsgSend.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSend: Could not create message: ' + e.message);
            }
        }
    };
};
exports.txClient = txClient;
var queryClient = function (_a) {
    var _b = _a === void 0 ? { addr: "http://localhost:1317" } : _a, addr = _b.addr;
    return new rest_1.Api({ baseURL: addr });
};
exports.queryClient = queryClient;
var SDKModule = /** @class */ (function () {
    function SDKModule(client) {
        var _this = this;
        this.registry = [];
        this.query = (0, exports.queryClient)({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {
            SendAuthorization: getStructure(types_1.SendAuthorization.fromPartial({})),
            Params: getStructure(types_2.Params.fromPartial({})),
            SendEnabled: getStructure(types_3.SendEnabled.fromPartial({})),
            Input: getStructure(types_4.Input.fromPartial({})),
            Output: getStructure(types_5.Output.fromPartial({})),
            Supply: getStructure(types_6.Supply.fromPartial({})),
            DenomUnit: getStructure(types_7.DenomUnit.fromPartial({})),
            Metadata: getStructure(types_8.Metadata.fromPartial({})),
            Balance: getStructure(types_9.Balance.fromPartial({})),
            DenomOwner: getStructure(types_10.DenomOwner.fromPartial({}))
        };
        client.on('signer-changed', function (signer) {
            _this.updateTX(client);
        });
    }
    SDKModule.prototype.updateTX = function (client) {
        var _a;
        var methods = (0, exports.txClient)({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: (_a = client.env.prefix) !== null && _a !== void 0 ? _a : "cosmos"
        });
        this.tx = methods;
        for (var m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    };
    return SDKModule;
}());
;
var Module = function (test) {
    return {
        module: {
            CosmosBankV1Beta1: new SDKModule(test)
        },
        registry: registry_1.msgTypes
    };
};
exports["default"] = Module;
