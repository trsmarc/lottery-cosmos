export class NetworkService {
  async fetchABCIInfo() {
    const res = await fetch(import.meta.env.VITE_RPC_URL + '/abci_info', {
      cache: 'no-store',
    });
    const json = await res.json();
    return json['result'];
  }

  async fetchBlocks() {
    const res = await fetch(import.meta.env.VITE_RPC_URL + '/blockchain', {
      cache: 'no-store',
    });
    const json = await res.json();
    return json['result'];
  }
}
