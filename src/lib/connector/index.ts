import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12000;

const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 97],
});

const walletConnect = new WalletConnectConnector({
  rpc: { [56]: 'https://bsc-dataseed.binance.org' },
  qrcode: true,
  supportedChainIds: [56],
  bridge: 'https://bridge.walletconnect.org',
});

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const connectors = {
  injected,
  walletConnect,
};
