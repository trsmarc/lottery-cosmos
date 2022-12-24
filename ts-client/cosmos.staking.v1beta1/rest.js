"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Api = exports.HttpClient = exports.ContentType = exports.V1Beta1BondStatus = void 0;
/**
* BondStatus is the status of a validator.

 - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.
 - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.
 - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.
 - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.
*/
var V1Beta1BondStatus;
(function (V1Beta1BondStatus) {
    V1Beta1BondStatus["BOND_STATUS_UNSPECIFIED"] = "BOND_STATUS_UNSPECIFIED";
    V1Beta1BondStatus["BOND_STATUS_UNBONDED"] = "BOND_STATUS_UNBONDED";
    V1Beta1BondStatus["BOND_STATUS_UNBONDING"] = "BOND_STATUS_UNBONDING";
    V1Beta1BondStatus["BOND_STATUS_BONDED"] = "BOND_STATUS_BONDED";
})(V1Beta1BondStatus = exports.V1Beta1BondStatus || (exports.V1Beta1BondStatus = {}));
var axios_1 = require("axios");
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        if (_a === void 0) { _a = {}; }
        var _this = this;
        var securityWorker = _a.securityWorker, secure = _a.secure, format = _a.format, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, responseFormat;
            var secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, body = _a.body, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        responseFormat = (format && this.format) || void 0;
                        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                            requestParams.headers.common = { Accept: "*/*" };
                            requestParams.headers.post = {};
                            requestParams.headers.put = {};
                            body = this.createFormData(body);
                        }
                        return [2 /*return*/, this.instance.request(__assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios_1["default"].create(__assign(__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.instance.defaults), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    HttpClient.prototype.createFormData = function (input) {
        return Object.keys(input || {}).reduce(function (formData, key) {
            var property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : "".concat(property));
            return formData;
        }, new FormData());
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title cosmos/staking/v1beta1/authz.proto
 * @version version not set
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags Query
         * @name QueryDelegatorDelegations
         * @summary DelegatorDelegations queries all delegations of a given delegator address.
         * @request GET:/cosmos/staking/v1beta1/delegations/{delegator_addr}
         */
        _this.queryDelegatorDelegations = function (delegatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/delegations/".concat(delegatorAddr), method: "GET", query: query, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryRedelegations
         * @summary Redelegations queries redelegations of given address.
         * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations
         */
        _this.queryRedelegations = function (delegatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/delegators/".concat(delegatorAddr, "/redelegations"), method: "GET", query: query, format: "json" }, params));
        };
        /**
       * No description
       *
       * @tags Query
       * @name QueryDelegatorUnbondingDelegations
       * @summary DelegatorUnbondingDelegations queries all unbonding delegations of a given
      delegator address.
       * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations
       */
        _this.queryDelegatorUnbondingDelegations = function (delegatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/delegators/".concat(delegatorAddr, "/unbonding_delegations"), method: "GET", query: query, format: "json" }, params));
        };
        /**
       * No description
       *
       * @tags Query
       * @name QueryDelegatorValidators
       * @summary DelegatorValidators queries all validators info for given delegator
      address.
       * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators
       */
        _this.queryDelegatorValidators = function (delegatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/delegators/".concat(delegatorAddr, "/validators"), method: "GET", query: query, format: "json" }, params));
        };
        /**
       * No description
       *
       * @tags Query
       * @name QueryDelegatorValidator
       * @summary DelegatorValidator queries validator info for given delegator validator
      pair.
       * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/{validator_addr}
       */
        _this.queryDelegatorValidator = function (delegatorAddr, validatorAddr, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/delegators/".concat(delegatorAddr, "/validators/").concat(validatorAddr), method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryHistoricalInfo
         * @summary HistoricalInfo queries the historical info for given height.
         * @request GET:/cosmos/staking/v1beta1/historical_info/{height}
         */
        _this.queryHistoricalInfo = function (height, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/historical_info/".concat(height), method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryParams
         * @summary Parameters queries the staking parameters.
         * @request GET:/cosmos/staking/v1beta1/params
         */
        _this.queryParams = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/params", method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool
         * @summary Pool queries the pool info.
         * @request GET:/cosmos/staking/v1beta1/pool
         */
        _this.queryPool = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/pool", method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidators
         * @summary Validators queries all validators that match the given status.
         * @request GET:/cosmos/staking/v1beta1/validators
         */
        _this.queryValidators = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators", method: "GET", query: query, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidator
         * @summary Validator queries validator info for given validator address.
         * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}
         */
        _this.queryValidator = function (validatorAddr, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators/".concat(validatorAddr), method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidatorDelegations
         * @summary ValidatorDelegations queries delegate info for given validator.
         * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations
         */
        _this.queryValidatorDelegations = function (validatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators/".concat(validatorAddr, "/delegations"), method: "GET", query: query, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryDelegation
         * @summary Delegation queries delegate info for given validator delegator pair.
         * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}
         */
        _this.queryDelegation = function (validatorAddr, delegatorAddr, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators/".concat(validatorAddr, "/delegations/").concat(delegatorAddr), method: "GET", format: "json" }, params));
        };
        /**
       * No description
       *
       * @tags Query
       * @name QueryUnbondingDelegation
       * @summary UnbondingDelegation queries unbonding info for given validator delegator
      pair.
       * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation
       */
        _this.queryUnbondingDelegation = function (validatorAddr, delegatorAddr, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators/".concat(validatorAddr, "/delegations/").concat(delegatorAddr, "/unbonding_delegation"), method: "GET", format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidatorUnbondingDelegations
         * @summary ValidatorUnbondingDelegations queries unbonding delegations of a validator.
         * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations
         */
        _this.queryValidatorUnbondingDelegations = function (validatorAddr, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/cosmos/staking/v1beta1/validators/".concat(validatorAddr, "/unbonding_delegations"), method: "GET", query: query, format: "json" }, params));
        };
        return _this;
    }
    return Api;
}(HttpClient));
exports.Api = Api;
