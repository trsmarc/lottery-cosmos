/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Bet } from "./bet";
import { LotteryRecord } from "./lottery_record";
import { Params } from "./params";

export const protobufPackage = "lottery.lottery";

/** GenesisState defines the lottery module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  betList: Bet[];
  lotteryRecordList: LotteryRecord[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  lotteryRecordCount: number;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, betList: [], lotteryRecordList: [], lotteryRecordCount: 0 };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.betList) {
      Bet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lotteryRecordList) {
      LotteryRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lotteryRecordCount !== 0) {
      writer.uint32(32).uint64(message.lotteryRecordCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.betList.push(Bet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lotteryRecordList.push(LotteryRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lotteryRecordCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      betList: Array.isArray(object?.betList) ? object.betList.map((e: any) => Bet.fromJSON(e)) : [],
      lotteryRecordList: Array.isArray(object?.lotteryRecordList)
        ? object.lotteryRecordList.map((e: any) => LotteryRecord.fromJSON(e))
        : [],
      lotteryRecordCount: isSet(object.lotteryRecordCount) ? Number(object.lotteryRecordCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.betList) {
      obj.betList = message.betList.map((e) => e ? Bet.toJSON(e) : undefined);
    } else {
      obj.betList = [];
    }
    if (message.lotteryRecordList) {
      obj.lotteryRecordList = message.lotteryRecordList.map((e) => e ? LotteryRecord.toJSON(e) : undefined);
    } else {
      obj.lotteryRecordList = [];
    }
    message.lotteryRecordCount !== undefined && (obj.lotteryRecordCount = Math.round(message.lotteryRecordCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.betList = object.betList?.map((e) => Bet.fromPartial(e)) || [];
    message.lotteryRecordList = object.lotteryRecordList?.map((e) => LotteryRecord.fromPartial(e)) || [];
    message.lotteryRecordCount = object.lotteryRecordCount ?? 0;
    return message;
  },
};

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
