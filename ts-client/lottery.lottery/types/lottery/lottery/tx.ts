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

export interface MsgCreateBet {
  creator: string;
  index: string;
  betSize: string;
  betIndex: string;
}

export interface MsgCreateBetResponse {
}

export interface MsgUpdateBet {
  creator: string;
  index: string;
  betSize: string;
  betIndex: string;
}

export interface MsgUpdateBetResponse {
}

export interface MsgDeleteBet {
  creator: string;
  index: string;
}

export interface MsgDeleteBetResponse {
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

function createBaseMsgCreateBet(): MsgCreateBet {
  return { creator: "", index: "", betSize: "", betIndex: "" };
}

export const MsgCreateBet = {
  encode(message: MsgCreateBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.betSize !== "") {
      writer.uint32(26).string(message.betSize);
    }
    if (message.betIndex !== "") {
      writer.uint32(34).string(message.betIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.betSize = reader.string();
          break;
        case 4:
          message.betIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      betSize: isSet(object.betSize) ? String(object.betSize) : "",
      betIndex: isSet(object.betIndex) ? String(object.betIndex) : "",
    };
  },

  toJSON(message: MsgCreateBet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.betSize !== undefined && (obj.betSize = message.betSize);
    message.betIndex !== undefined && (obj.betIndex = message.betIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBet>, I>>(object: I): MsgCreateBet {
    const message = createBaseMsgCreateBet();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.betSize = object.betSize ?? "";
    message.betIndex = object.betIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateBetResponse(): MsgCreateBetResponse {
  return {};
}

export const MsgCreateBetResponse = {
  encode(_: MsgCreateBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBetResponse();
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

  fromJSON(_: any): MsgCreateBetResponse {
    return {};
  },

  toJSON(_: MsgCreateBetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBetResponse>, I>>(_: I): MsgCreateBetResponse {
    const message = createBaseMsgCreateBetResponse();
    return message;
  },
};

function createBaseMsgUpdateBet(): MsgUpdateBet {
  return { creator: "", index: "", betSize: "", betIndex: "" };
}

export const MsgUpdateBet = {
  encode(message: MsgUpdateBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.betSize !== "") {
      writer.uint32(26).string(message.betSize);
    }
    if (message.betIndex !== "") {
      writer.uint32(34).string(message.betIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.betSize = reader.string();
          break;
        case 4:
          message.betIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      betSize: isSet(object.betSize) ? String(object.betSize) : "",
      betIndex: isSet(object.betIndex) ? String(object.betIndex) : "",
    };
  },

  toJSON(message: MsgUpdateBet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.betSize !== undefined && (obj.betSize = message.betSize);
    message.betIndex !== undefined && (obj.betIndex = message.betIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBet>, I>>(object: I): MsgUpdateBet {
    const message = createBaseMsgUpdateBet();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.betSize = object.betSize ?? "";
    message.betIndex = object.betIndex ?? "";
    return message;
  },
};

function createBaseMsgUpdateBetResponse(): MsgUpdateBetResponse {
  return {};
}

export const MsgUpdateBetResponse = {
  encode(_: MsgUpdateBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBetResponse();
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

  fromJSON(_: any): MsgUpdateBetResponse {
    return {};
  },

  toJSON(_: MsgUpdateBetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBetResponse>, I>>(_: I): MsgUpdateBetResponse {
    const message = createBaseMsgUpdateBetResponse();
    return message;
  },
};

function createBaseMsgDeleteBet(): MsgDeleteBet {
  return { creator: "", index: "" };
}

export const MsgDeleteBet = {
  encode(message: MsgDeleteBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: MsgDeleteBet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBet>, I>>(object: I): MsgDeleteBet {
    const message = createBaseMsgDeleteBet();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgDeleteBetResponse(): MsgDeleteBetResponse {
  return {};
}

export const MsgDeleteBetResponse = {
  encode(_: MsgDeleteBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBetResponse();
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

  fromJSON(_: any): MsgDeleteBetResponse {
    return {};
  },

  toJSON(_: MsgDeleteBetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBetResponse>, I>>(_: I): MsgDeleteBetResponse {
    const message = createBaseMsgDeleteBetResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BuyLottery(request: MsgBuyLottery): Promise<MsgBuyLotteryResponse>;
  CreateBet(request: MsgCreateBet): Promise<MsgCreateBetResponse>;
  UpdateBet(request: MsgUpdateBet): Promise<MsgUpdateBetResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBet(request: MsgDeleteBet): Promise<MsgDeleteBetResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BuyLottery = this.BuyLottery.bind(this);
    this.CreateBet = this.CreateBet.bind(this);
    this.UpdateBet = this.UpdateBet.bind(this);
    this.DeleteBet = this.DeleteBet.bind(this);
  }
  BuyLottery(request: MsgBuyLottery): Promise<MsgBuyLotteryResponse> {
    const data = MsgBuyLottery.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "BuyLottery", data);
    return promise.then((data) => MsgBuyLotteryResponse.decode(new _m0.Reader(data)));
  }

  CreateBet(request: MsgCreateBet): Promise<MsgCreateBetResponse> {
    const data = MsgCreateBet.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "CreateBet", data);
    return promise.then((data) => MsgCreateBetResponse.decode(new _m0.Reader(data)));
  }

  UpdateBet(request: MsgUpdateBet): Promise<MsgUpdateBetResponse> {
    const data = MsgUpdateBet.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "UpdateBet", data);
    return promise.then((data) => MsgUpdateBetResponse.decode(new _m0.Reader(data)));
  }

  DeleteBet(request: MsgDeleteBet): Promise<MsgDeleteBetResponse> {
    const data = MsgDeleteBet.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "DeleteBet", data);
    return promise.then((data) => MsgDeleteBetResponse.decode(new _m0.Reader(data)));
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
