import { txClient } from "marktrs-lottery-chain-ignite-client-ts/lottery.lottery";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { DeliverTxResponse } from "@cosmjs/stargate";
export class LotteryService {
  private client: any;
  private wallet!: DirectSecp256k1HdWallet;

  async setup(mnemonic: string) {
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
    this.client = txClient({
      signer: this.wallet,
      prefix: import.meta.env.VITE_ADDRESS_PREFIX,
      addr: import.meta.env.VITE_RPC_URL
    });
  }

  async buyLottery(betSize: number): Promise<DeliverTxResponse> {
    const creator = await this.getAddress();
    return this.client.sendMsgBuyLottery({
      value: {
        creator,
        fee: import.meta.env.VITE_LOTTERY_FEE,
        betSize: betSize + "token"
      }
    });
  }

  async getAddress() {
    const account = await this.wallet.getAccounts();
    return account[0].address;
  }
}
