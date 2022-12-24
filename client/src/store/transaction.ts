import { defineStore } from 'pinia';
import { readYamlFile } from '../utils/parser';
import { LotteryService } from '../blockchain';
import { useAccountStore } from './account';
import { useBetStore } from './bet';
import { useLotteryRecordStore } from './lottery-record';

interface TransactionState {
  transactions: any;
  iterationCount: number;
  isSimulating: boolean;
}

export const useTransactionStore = defineStore('transaction', {
  state: (): TransactionState => ({
    transactions: [],
    iterationCount: 0,
    isSimulating: false,
  }),
  actions: {
    async startSimulation() {
      if (
        this.isSimulating ||
        this.iterationCount >= import.meta.env.VITE_MAX_ITERATION
      )
        return;
      
      this.isSimulating = true;
      const accountStore = useAccountStore();
      const betStore = useBetStore();
      const lotteryRecordStore = useLotteryRecordStore();

      const { accounts } = await readYamlFile('../config.yml');

      if (!accounts) {
        return;
      }

      for (let index = 0; index < import.meta.env.VITE_MAX_ITERATION; index++) {
        const promises = accounts.map(async (account) => {
          console.info('processing', {
            name: account.name,
            betSize: account['bet-size'],
          });

          const client = new LotteryService();
          await client.setup(account.mnemonic);
          try {
            const result = await client.buyLottery(
              parseInt(account['bet-size'])
            );
            return result;
          } catch (error) {
            console.error({
              name: account.name,
              betSize: account['bet-size'],
              error,
            });
          }
        });

        this.iterationCount += 1;

        await Promise.allSettled(promises);
        await betStore.fetchBets();
        await accountStore.fetchAccountBalance();
        await lotteryRecordStore.fetchLotteryRecords();
      }

      this.isSimulating = false;
    },
    async fetchTransaction() {},
  },
});
