import {ChakraProvider} from '@chakra-ui/react'

import blue from '../blue'
import {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider resetCSS theme={blue}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
