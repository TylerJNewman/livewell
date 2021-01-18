import {ChakraProvider} from '@chakra-ui/react'
import {ApolloProvider} from '@apollo/client'
import blue from '../blue'
import {AppProps} from 'next/app'
import React from 'react'
import {useApollo} from 'src/apollo'

function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCSS theme={blue}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
