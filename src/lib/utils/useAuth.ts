import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { useCallback, useEffect } from 'react';

const useAuth = () => {
  const { activate, deactivate, setError, account } = useWeb3React();

  const login = useCallback(
    async (connector: any) => {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          setError(error);
        } else {
          if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            // reset when user close wallet connect popup
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector;
              //   walletConnector.walletConnectProvider = null;
            }
          } else {
            console.log('error.message', error.message);
          }
        }
      });
    },
    [activate, setError],
  );

  return { login, logout: deactivate, account };
};

export default useAuth;
