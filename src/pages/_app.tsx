import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import currentTheme from '../../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
