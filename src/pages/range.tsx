import {useRouter} from 'next/dist/client/router'
import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import TimeRange from 'src/components/sections/TimeRange'
import ErrorPage from 'next/error'

const Index = () => {
  const router = useRouter()
  const {category} = router.query

  if (typeof category !== 'string') return <ErrorPage statusCode={404} />

  return (
    <Layout
      overflow="scroll"
      height="100vh"
      lightColor={'cyan.400'}
      darkColor={'purple'}
    >
      <Header />
      <TimeRange category={category} />
    </Layout>
  )
}

export default Index
