/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Bet } from "./bet";
import { LotteryRecord } from "./lottery_record";
import { Params } from "./params";

export const protobufPackage = "lottery.lottery";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBetRequest {
  index: string;
}

export interface QueryGetBetResponse {
  bet: Bet | undefined;
}

export interface QueryAllBetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBetResponse {
  bet: Bet[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLotteryRecordRequest {
  id: number;
}

export interface QueryGetLotteryRecordResponse {
  LotteryRecord: LotteryRecord | undefined;
}

export interface QueryAllLotteryRecordRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLotteryRecordResponse {
  LotteryRecord: LotteryRecord[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBetRequest(): QueryGetBetRequest {
  return { index: "" };
}

export const QueryGetBetRequest = {
  encode(message: QueryGetBetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBetRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetBetRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBetRequest>, I>>(object: I): QueryGetBetRequest {
    const message = createBaseQueryGetBetRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetBetResponse(): QueryGetBetResponse {
  return { bet: undefined };
}

export const QueryGetBetResponse = {
  encode(message: QueryGetBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bet !== undefined) {
      Bet.encode(message.bet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bet = Bet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBetResponse {
    return { bet: isSet(object.bet) ? Bet.fromJSON(object.bet) : undefined };
  },

  toJSON(message: QueryGetBetResponse): unknown {
    const obj: any = {};
    message.bet !== undefined && (obj.bet = message.bet ? Bet.toJSON(message.bet) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBetResponse>, I>>(object: I): QueryGetBetResponse {
    const message = createBaseQueryGetBetResponse();
    message.bet = (object.bet !== undefined && object.bet !== null) ? Bet.fromPartial(object.bet) : undefined;
    return message;
  },
};

function createBaseQueryAllBetRequest(): QueryAllBetRequest {
  return { pagination: undefined };
}

export const QueryAllBetRequest = {
  encode(message: QueryAllBetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBetRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBetRequest>, I>>(object: I): QueryAllBetRequest {
    const message = createBaseQueryAllBetRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBetResponse(): QueryAllBetResponse {
  return { bet: [], pagination: undefined };
}

export const QueryAllBetResponse = {
  encode(message: QueryAllBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bet) {
      Bet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bet.push(Bet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBetResponse {
    return {
      bet: Array.isArray(object?.bet) ? object.bet.map((e: any) => Bet.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBetResponse): unknown {
    const obj: any = {};
    if (message.bet) {
      obj.bet = message.bet.map((e) => e ? Bet.toJSON(e) : undefined);
    } else {
      obj.bet = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBetResponse>, I>>(object: I): QueryAllBetResponse {
    const message = createBaseQueryAllBetResponse();
    message.bet = object.bet?.map((e) => Bet.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetLotteryRecordRequest(): QueryGetLotteryRecordRequest {
  return { id: 0 };
}

export const QueryGetLotteryRecordRequest = {
  encode(message: QueryGetLotteryRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLotteryRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLotteryRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLotteryRecordRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetLotteryRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLotteryRecordRequest>, I>>(object: I): QueryGetLotteryRecordRequest {
    const message = createBaseQueryGetLotteryRecordRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetLotteryRecordResponse(): QueryGetLotteryRecordResponse {
  return { LotteryRecord: undefined };
}

export const QueryGetLotteryRecordResponse = {
  encode(message: QueryGetLotteryRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.LotteryRecord !== undefined) {
      LotteryRecord.encode(message.LotteryRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLotteryRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLotteryRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LotteryRecord = LotteryRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLotteryRecordResponse {
    return { LotteryRecord: isSet(object.LotteryRecord) ? LotteryRecord.fromJSON(object.LotteryRecord) : undefined };
  },

  toJSON(message: QueryGetLotteryRecordResponse): unknown {
    const obj: any = {};
    message.LotteryRecord !== undefined
      && (obj.LotteryRecord = message.LotteryRecord ? LotteryRecord.toJSON(message.LotteryRecord) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLotteryRecordResponse>, I>>(
    object: I,
  ): QueryGetLotteryRecordResponse {
    const message = createBaseQueryGetLotteryRecordResponse();
    message.LotteryRecord = (object.LotteryRecord !== undefined && object.LotteryRecord !== null)
      ? LotteryRecord.fromPartial(object.LotteryRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLotteryRecordRequest(): QueryAllLotteryRecordRequest {
  return { pagination: undefined };
}

export const QueryAllLotteryRecordRequest = {
  encode(message: QueryAllLotteryRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLotteryRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLotteryRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryRecordRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllLotteryRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLotteryRecordRequest>, I>>(object: I): QueryAllLotteryRecordRequest {
    const message = createBaseQueryAllLotteryRecordRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLotteryRecordResponse(): QueryAllLotteryRecordResponse {
  return { LotteryRecord: [], pagination: undefined };
}

export const QueryAllLotteryRecordResponse = {
  encode(message: QueryAllLotteryRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.LotteryRecord) {
      LotteryRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLotteryRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLotteryRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LotteryRecord.push(LotteryRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryRecordResponse {
    return {
      LotteryRecord: Array.isArray(object?.LotteryRecord)
        ? object.LotteryRecord.map((e: any) => LotteryRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllLotteryRecordResponse): unknown {
    const obj: any = {};
    if (message.LotteryRecord) {
      obj.LotteryRecord = message.LotteryRecord.map((e) => e ? LotteryRecord.toJSON(e) : undefined);
    } else {
      obj.LotteryRecord = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLotteryRecordResponse>, I>>(
    object: I,
  ): QueryAllLotteryRecordResponse {
    const message = createBaseQueryAllLotteryRecordResponse();
    message.LotteryRecord = object.LotteryRecord?.map((e) => LotteryRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Bet by index. */
  Bet(request: QueryGetBetRequest): Promise<QueryGetBetResponse>;
  /** Queries a list of Bet items. */
  BetAll(request: QueryAllBetRequest): Promise<QueryAllBetResponse>;
  /** Queries a LotteryRecord by id. */
  LotteryRecord(request: QueryGetLotteryRecordRequest): Promise<QueryGetLotteryRecordResponse>;
  /** Queries a list of LotteryRecord items. */
  LotteryRecordAll(request: QueryAllLotteryRecordRequest): Promise<QueryAllLotteryRecordResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Bet = this.Bet.bind(this);
    this.BetAll = this.BetAll.bind(this);
    this.LotteryRecord = this.LotteryRecord.bind(this);
    this.LotteryRecordAll = this.LotteryRecordAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Bet(request: QueryGetBetRequest): Promise<QueryGetBetResponse> {
    const data = QueryGetBetRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "Bet", data);
    return promise.then((data) => QueryGetBetResponse.decode(new _m0.Reader(data)));
  }

  BetAll(request: QueryAllBetRequest): Promise<QueryAllBetResponse> {
    const data = QueryAllBetRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "BetAll", data);
    return promise.then((data) => QueryAllBetResponse.decode(new _m0.Reader(data)));
  }

  LotteryRecord(request: QueryGetLotteryRecordRequest): Promise<QueryGetLotteryRecordResponse> {
    const data = QueryGetLotteryRecordRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "LotteryRecord", data);
    return promise.then((data) => QueryGetLotteryRecordResponse.decode(new _m0.Reader(data)));
  }

  LotteryRecordAll(request: QueryAllLotteryRecordRequest): Promise<QueryAllLotteryRecordResponse> {
    const data = QueryAllLotteryRecordRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "LotteryRecordAll", data);
    return promise.then((data) => QueryAllLotteryRecordResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
