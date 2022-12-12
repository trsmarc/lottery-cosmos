/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lottery.lottery";

export interface MsgBuyLottery {
  creator: string;
  fee: string;
  betSize: string;
}

export interface MsgBuyLotteryResponse {
}

function createBaseMsgBuyLottery(): MsgBuyLottery {
  return { creator: "", fee: "", betSize: "" };
}

export const MsgBuyLottery = {
  encode(message: MsgBuyLottery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    if (message.betSize !== "") {
      writer.uint32(26).string(message.betSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyLottery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyLottery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        case 3:
          message.betSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyLottery {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      betSize: isSet(object.betSize) ? String(object.betSize) : "",
    };
  },

  toJSON(message: MsgBuyLottery): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fee !== undefined && (obj.fee = message.fee);
    message.betSize !== undefined && (obj.betSize = message.betSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyLottery>, I>>(object: I): MsgBuyLottery {
    const message = createBaseMsgBuyLottery();
    message.creator = object.creator ?? "";
    message.fee = object.fee ?? "";
    message.betSize = object.betSize ?? "";
    return message;
  },
};

function createBaseMsgBuyLotteryResponse(): MsgBuyLotteryResponse {
  return {};
}

export const MsgBuyLotteryResponse = {
  encode(_: MsgBuyLotteryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyLotteryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyLotteryResponse();
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

  fromJSON(_: any): MsgBuyLotteryResponse {
    return {};
  },

  toJSON(_: MsgBuyLotteryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyLotteryResponse>, I>>(_: I): MsgBuyLotteryResponse {
    const message = createBaseMsgBuyLotteryResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyLottery(request: MsgBuyLottery): Promise<MsgBuyLotteryResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BuyLottery = this.BuyLottery.bind(this);
  }
  BuyLottery(request: MsgBuyLottery): Promise<MsgBuyLotteryResponse> {
    const data = MsgBuyLottery.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "BuyLottery", data);
    return promise.then((data) => MsgBuyLotteryResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
