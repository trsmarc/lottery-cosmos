import { defineStore } from "pinia";
import { Bet } from "../../../ts-client/lottery.lottery/types";

interface betState {
  bets: Bet[];
}

export const useBetStore = defineStore("bet", {
  state: (): betState => ({
    bets: []
  }),
  actions: {
    async fetchBets() {
      const res = await fetch(
        import.meta.env.VITE_BLOCKCHAIN_URL + "/lottery/lottery/bet"
      );
      const json = await res.json();
      if (json["bet"]) {
        this.bets = json["bet"];
      }
    }
  }
});
