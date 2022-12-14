import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBuyLottery } from "./types/lottery/lottery/tx";
import { MsgUpdateBet } from "./types/lottery/lottery/tx";
import { MsgDeleteBet } from "./types/lottery/lottery/tx";
import { MsgCreateBet } from "./types/lottery/lottery/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/lottery.lottery.MsgBuyLottery", MsgBuyLottery],
    ["/lottery.lottery.MsgUpdateBet", MsgUpdateBet],
    ["/lottery.lottery.MsgDeleteBet", MsgDeleteBet],
    ["/lottery.lottery.MsgCreateBet", MsgCreateBet],
    
];

export { msgTypes }