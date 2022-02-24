import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import theme from '../theme';
import { MoralisProvider } from "react-moralis";
import { AppId, ServerUrl } from '../constants';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
      <MoralisProvider appId={AppId} serverUrl={ServerUrl}>
          <ChakraProvider resetCSS theme={theme}>
            <CSSReset/>
            {
              getLayout(
                  <Component {...pageProps} />
              )
            }
          </ChakraProvider>
      </MoralisProvider>
  )
}

export default MyApp
