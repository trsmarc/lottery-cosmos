export interface Account {
  "bet-size": string;
  name: string;
  coins: string[];
  mnemonic: string;
}

export interface Config {
  accounts?: Account[];
}
