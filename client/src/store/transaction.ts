import { defineStore } from 'pinia';
import { LotteryService, NetworkService } from '../blockchain';
import { readYamlFile } from '../utils/parser';
import { useAccountStore } from './account';
import { useBetStore } from './bet';
import { useLotteryRecordStore } from './lottery-record';

interface TransactionState {
  blocks: any[];
  blockPagination: {
    offset: number;
  };
  iterationCount: number;
  isSimulating: boolean;
  isNetworkReady: boolean;
}

export const useTransactionStore = defineStore('transaction', {
  state: (): TransactionState => ({
    blocks: [],
    blockPagination: {
      offset: 0,
    },
    iterationCount: 0,
    isSimulating: false,
    isNetworkReady: false,
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
        if (!this.isSimulating) {
          break;
        }

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
            throw error;
          }
        });

        const result = await Promise.allSettled(promises);
        const failed = result.filter((re) => re.status === 'rejected');
        if (failed.length > 0) {
          alert(
            'Transactions already exist, Please try again after next block'
          );
          break;
        }

        await betStore.fetchBets();
        await accountStore.fetchAccountBalance();
        await lotteryRecordStore.fetchLotteryRecords();
        this.iterationCount += 1;
      }

      this.isSimulating = false;
    },
    async stopSimulation() {
      this.isSimulating = false;
    },
    async fetchBlocks() {
      const client = new NetworkService();
      const blockData = await client.fetchBlocks();
      this.blocks = blockData.block_metas;
    },
    async checkNetworkStatus() {
      const client = new NetworkService();
      try {
        const abci = await client.fetchABCIInfo();
        const lastBlockNumber = abci['response']['last_block_height'];

        if (lastBlockNumber) {
          this.isNetworkReady = true;
        } else {
          this.isNetworkReady = false;
        }
      } catch (error) {
        this.isNetworkReady = false;
        console.error(error);
      }
    },
  },
});
