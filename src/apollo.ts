import {IncomingMessage, ServerResponse} from 'http'
import {PrismicLink} from 'apollo-link-prismic'
import {useMemo} from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

const httpLink = PrismicLink({
  uri: process.env.PRISMIC_GRAPHQL_ENDPOINT || '',
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})

// function createIsomorphLink(context: ResolverContext = {}) {
//   if (typeof window === 'undefined') {
//     const {SchemaLink} = require('@apollo/client/link/schema')
//     const {schema} = require('./schema')
//     return new SchemaLink({schema, context})
//   } else {
//     return httpLink
//   }
// }

function createApolloClient() {
  return new ApolloClient({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
