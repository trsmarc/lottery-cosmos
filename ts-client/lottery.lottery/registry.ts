import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateBet } from "./types/lottery/lottery/tx";
import { MsgDeleteBet } from "./types/lottery/lottery/tx";
import { MsgBuyLottery } from "./types/lottery/lottery/tx";
import { MsgCreateBet } from "./types/lottery/lottery/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/lottery.lottery.MsgUpdateBet", MsgUpdateBet],
    ["/lottery.lottery.MsgDeleteBet", MsgDeleteBet],
    ["/lottery.lottery.MsgBuyLottery", MsgBuyLottery],
    ["/lottery.lottery.MsgCreateBet", MsgCreateBet],
    
];

export { msgTypes }