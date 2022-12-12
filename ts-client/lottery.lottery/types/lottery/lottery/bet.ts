/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lottery.lottery";

export interface Bet {
  index: string;
  betSize: string;
  betIndex: string;
  creator: string;
}

function createBaseBet(): Bet {
  return { index: "", betSize: "", betIndex: "", creator: "" };
}

export const Bet = {
  encode(message: Bet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.betSize !== "") {
      writer.uint32(18).string(message.betSize);
    }
    if (message.betIndex !== "") {
      writer.uint32(26).string(message.betIndex);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.betSize = reader.string();
          break;
        case 3:
          message.betIndex = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bet {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      betSize: isSet(object.betSize) ? String(object.betSize) : "",
      betIndex: isSet(object.betIndex) ? String(object.betIndex) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Bet): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.betSize !== undefined && (obj.betSize = message.betSize);
    message.betIndex !== undefined && (obj.betIndex = message.betIndex);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bet>, I>>(object: I): Bet {
    const message = createBaseBet();
    message.index = object.index ?? "";
    message.betSize = object.betSize ?? "";
    message.betIndex = object.betIndex ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
