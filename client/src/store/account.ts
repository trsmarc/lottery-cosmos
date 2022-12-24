import { defineStore } from 'pinia';
import { Account } from '../types/account';
import { LotteryService } from '../blockchain';
import { readYamlFile } from '../utils/parser';

interface IAccountState {
  accounts: Account[];
}

export const useAccountStore = defineStore('account', {
  state: (): IAccountState => ({
    accounts: [],
  }),
  actions: {
    async fetchAccounts() {
      this.accounts = [];
      const { accounts } = await readYamlFile('../config.yml');
      if (!accounts) {
        return;
      }

      for (let index = 0; index < accounts.length; index++) {
        const account = accounts[index];
        const client = new LotteryService();
        await client.setup(account.mnemonic);
        const address = await client.getAddress();

        this.accounts.push({
          ...account,
          address,
          betSize: account['bet-size'],
        });
      }
    },
    async fetchAccountBalance() {
      const getBalance = async (address: string) => {
        const res = await fetch(
          import.meta.env.VITE_BLOCKCHAIN_URL +
            '/cosmos/bank/v1beta1/balances/' +
            address
        );
        const json = await res.json();
        const balance = json.balances[0];
        if (!balance) {
          return '0 token';
        }
        return balance.amount + ' ' + balance.denom;
      };

      for (let index = 0; index < this.accounts.length; index++) {
        const account = this.accounts[index];
        if (account.address) {
          account['balance'] = await getBalance(account.address);
        }
      }
    },
  },
});
