import { defineStore } from "pinia";
import { LotteryRecord } from "../../../ts-client/lottery.lottery/types";

interface lotteryRecordState {
  lotteryRecords: LotteryRecord[];
}

export const useLotteryRecordStore = defineStore("lotteryRecord", {
  state: (): lotteryRecordState => ({
    lotteryRecords: []
  }),
  actions: {
    async fetchLotteryRecords() {
      const res = await fetch(
        import.meta.env.VITE_BLOCKCHAIN_URL + "/lottery/lottery/lottery_record"
      );
      const json = await res.json();
      if (json["LotteryRecord"]) {
        this.lotteryRecords = json["LotteryRecord"];
      }
    }
  }
});
