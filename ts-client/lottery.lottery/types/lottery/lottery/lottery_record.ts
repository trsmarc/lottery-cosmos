/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lottery.lottery";

export interface LotteryRecord {
  id: number;
  winnerIndex: string;
  winnerAddress: string;
  winnerType: string;
  reward: string;
}

function createBaseLotteryRecord(): LotteryRecord {
  return { id: 0, winnerIndex: "", winnerAddress: "", winnerType: "", reward: "" };
}

export const LotteryRecord = {
  encode(message: LotteryRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.winnerIndex !== "") {
      writer.uint32(18).string(message.winnerIndex);
    }
    if (message.winnerAddress !== "") {
      writer.uint32(26).string(message.winnerAddress);
    }
    if (message.winnerType !== "") {
      writer.uint32(34).string(message.winnerType);
    }
    if (message.reward !== "") {
      writer.uint32(42).string(message.reward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LotteryRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLotteryRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.winnerIndex = reader.string();
          break;
        case 3:
          message.winnerAddress = reader.string();
          break;
        case 4:
          message.winnerType = reader.string();
          break;
        case 5:
          message.reward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LotteryRecord {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      winnerIndex: isSet(object.winnerIndex) ? String(object.winnerIndex) : "",
      winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : "",
      winnerType: isSet(object.winnerType) ? String(object.winnerType) : "",
      reward: isSet(object.reward) ? String(object.reward) : "",
    };
  },

  toJSON(message: LotteryRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.winnerIndex !== undefined && (obj.winnerIndex = message.winnerIndex);
    message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
    message.winnerType !== undefined && (obj.winnerType = message.winnerType);
    message.reward !== undefined && (obj.reward = message.reward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LotteryRecord>, I>>(object: I): LotteryRecord {
    const message = createBaseLotteryRecord();
    message.id = object.id ?? 0;
    message.winnerIndex = object.winnerIndex ?? "";
    message.winnerAddress = object.winnerAddress ?? "";
    message.winnerType = object.winnerType ?? "";
    message.reward = object.reward ?? "";
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
