import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'lib/connector';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import currentTheme from '../../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
