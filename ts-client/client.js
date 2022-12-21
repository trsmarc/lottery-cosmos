"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.IgniteClient = void 0;
/// <reference path="./types.d.ts" />
var proto_signing_1 = require("@cosmjs/proto-signing");
var stargate_1 = require("@cosmjs/stargate");
var events_1 = require("events");
var defaultFee = {
    amount: [],
    gas: "200000"
};
var IgniteClient = /** @class */ (function (_super) {
    __extends(IgniteClient, _super);
    function IgniteClient(env, signer) {
        var _this = _super.call(this) || this;
        _this.registry = [];
        _this.env = env;
        _this.setMaxListeners(0);
        _this.signer = signer;
        var classConstructor = _this.constructor;
        classConstructor.plugins.forEach(function (plugin) {
            var pluginInstance = plugin(_this);
            Object.assign(_this, pluginInstance.module);
            if (_this.registry) {
                _this.registry = _this.registry.concat(pluginInstance.registry);
            }
        });
        return _this;
    }
    IgniteClient.plugin = function (plugin) {
        var currentPlugins = this.plugins;
        var AugmentedClient = /** @class */ (function (_super) {
            __extends(AugmentedClient, _super);
            function AugmentedClient() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AugmentedClient.plugins = currentPlugins.concat(plugin);
            return AugmentedClient;
        }(this));
        if (Array.isArray(plugin)) {
            return AugmentedClient;
        }
        return AugmentedClient;
    };
    IgniteClient.prototype.signAndBroadcast = function (msgs, fee, memo) {
        return __awaiter(this, void 0, void 0, function () {
            var address, signingClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.signer.getAccounts()];
                    case 1:
                        address = (_a.sent())[0].address;
                        return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(this.env.rpcURL, this.signer, { registry: new proto_signing_1.Registry(this.registry), prefix: this.env.prefix })];
                    case 2:
                        signingClient = _a.sent();
                        return [4 /*yield*/, signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw new Error(" Signer is not present.");
                }
            });
        });
    };
    IgniteClient.prototype.useSigner = function (signer) {
        this.signer = signer;
        this.emit("signer-changed", this.signer);
    };
    IgniteClient.prototype.removeSigner = function () {
        this.signer = undefined;
        this.emit("signer-changed", this.signer);
    };
    IgniteClient.prototype.useKeplr = function (keplrChainInfo) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (keplrChainInfo === void 0) { keplrChainInfo = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var queryClient, stakingQueryClient, bankQueryClient, stakingqc, qc, node_info, chainId, chainName, staking, bankqc, tokens, addrPrefix, rpc, rest, stakeCurrency, bip44, bech32Config, currencies, feeCurrencies, coinType, suggestOptions, e_1;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        _o.trys.push([0, 13, , 14]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return require("./cosmos.base.tendermint.v1beta1/module"); })];
                    case 1:
                        queryClient = (_o.sent()).queryClient;
                        return [4 /*yield*/, Promise.resolve().then(function () { return require("./cosmos.staking.v1beta1/module"); })];
                    case 2:
                        stakingQueryClient = (_o.sent()).queryClient;
                        return [4 /*yield*/, Promise.resolve().then(function () { return require("./cosmos.bank.v1beta1/module"); })];
                    case 3:
                        bankQueryClient = (_o.sent())
                            .queryClient;
                        stakingqc = stakingQueryClient({ addr: this.env.apiURL });
                        qc = queryClient({ addr: this.env.apiURL });
                        return [4 /*yield*/, qc.serviceGetNodeInfo()];
                    case 4: return [4 /*yield*/, (_o.sent()).data];
                    case 5:
                        node_info = _o.sent();
                        chainId = (_b = (_a = node_info.default_node_info) === null || _a === void 0 ? void 0 : _a.network) !== null && _b !== void 0 ? _b : "";
                        chainName = (chainId === null || chainId === void 0 ? void 0 : chainId.toUpperCase()) + " Network";
                        return [4 /*yield*/, stakingqc.queryParams()];
                    case 6: return [4 /*yield*/, (_o.sent()).data];
                    case 7:
                        staking = _o.sent();
                        bankqc = bankQueryClient({ addr: this.env.apiURL });
                        return [4 /*yield*/, bankqc.queryTotalSupply()];
                    case 8: return [4 /*yield*/, (_o.sent()).data];
                    case 9:
                        tokens = _o.sent();
                        addrPrefix = (_c = this.env.prefix) !== null && _c !== void 0 ? _c : "cosmos";
                        rpc = this.env.rpcURL;
                        rest = this.env.apiURL;
                        stakeCurrency = {
                            coinDenom: (_f = (_e = (_d = staking.params) === null || _d === void 0 ? void 0 : _d.bond_denom) === null || _e === void 0 ? void 0 : _e.toUpperCase()) !== null && _f !== void 0 ? _f : "",
                            coinMinimalDenom: (_h = (_g = staking.params) === null || _g === void 0 ? void 0 : _g.bond_denom) !== null && _h !== void 0 ? _h : "",
                            coinDecimals: 0
                        };
                        bip44 = {
                            coinType: 118
                        };
                        bech32Config = {
                            bech32PrefixAccAddr: addrPrefix,
                            bech32PrefixAccPub: addrPrefix + "pub",
                            bech32PrefixValAddr: addrPrefix + "valoper",
                            bech32PrefixValPub: addrPrefix + "valoperpub",
                            bech32PrefixConsAddr: addrPrefix + "valcons",
                            bech32PrefixConsPub: addrPrefix + "valconspub"
                        };
                        currencies = (_k = (_j = tokens.supply) === null || _j === void 0 ? void 0 : _j.map(function (x) {
                            var _a, _b, _c;
                            var y = {
                                coinDenom: (_b = (_a = x.denom) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "",
                                coinMinimalDenom: (_c = x.denom) !== null && _c !== void 0 ? _c : "",
                                coinDecimals: 0
                            };
                            return y;
                        })) !== null && _k !== void 0 ? _k : [];
                        feeCurrencies = (_m = (_l = tokens.supply) === null || _l === void 0 ? void 0 : _l.map(function (x) {
                            var _a, _b, _c;
                            var y = {
                                coinDenom: (_b = (_a = x.denom) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "",
                                coinMinimalDenom: (_c = x.denom) !== null && _c !== void 0 ? _c : "",
                                coinDecimals: 0
                            };
                            return y;
                        })) !== null && _m !== void 0 ? _m : [];
                        coinType = 118;
                        if (!chainId) return [3 /*break*/, 11];
                        suggestOptions = __assign({ chainId: chainId, chainName: chainName, rpc: rpc, rest: rest, stakeCurrency: stakeCurrency, bip44: bip44, bech32Config: bech32Config, currencies: currencies, feeCurrencies: feeCurrencies, coinType: coinType }, keplrChainInfo);
                        return [4 /*yield*/, window.keplr.experimentalSuggestChain(suggestOptions)];
                    case 10:
                        _o.sent();
                        window.keplr.defaultOptions = {
                            sign: {
                                preferNoSetFee: true,
                                preferNoSetMemo: true
                            }
                        };
                        _o.label = 11;
                    case 11: return [4 /*yield*/, window.keplr.enable(chainId)];
                    case 12:
                        _o.sent();
                        this.signer = window.keplr.getOfflineSigner(chainId);
                        this.emit("signer-changed", this.signer);
                        return [3 /*break*/, 14];
                    case 13:
                        e_1 = _o.sent();
                        throw new Error("Could not load tendermint, staking and bank modules. Please ensure your client loads them to use useKeplr()");
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    IgniteClient.plugins = [];
    return IgniteClient;
}(events_1.EventEmitter));
exports.IgniteClient = IgniteClient;
