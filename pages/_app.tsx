import Layout from 'components/layout/Layout';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from 'theme/globalStyle';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/index';
import { initKakao } from '../lib/kakao';
import { useEffect } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      !window.Kakao.isInitialized() && window.Kakao && initKakao();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <div id="modal-root"></div>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
