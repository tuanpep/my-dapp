import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

const POLLING_INTERVAL = 12000;

const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 97],
});

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const connectors = {
  injected: injected,
};
