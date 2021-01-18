import {useRouter} from 'next/dist/client/router'
import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import TrainingView from 'src/components/sections/TrainingView'
import ErrorPage from 'next/error'

const Training = () => {
  const router = useRouter()
  const {category, minutes} = router.query

  if (typeof category !== 'string' || typeof minutes !== 'string')
    return <ErrorPage statusCode={404} />

  return (
    <Layout overflow="scroll" h="100vh" lightColor={'white'}>
      <Header />
      <TrainingView minutes={minutes} category={category} />
    </Layout>
  )
}

export default Training
