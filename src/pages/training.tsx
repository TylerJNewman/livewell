import {useRouter} from 'next/dist/client/router'
import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import TrainingView from 'src/components/sections/TrainingView'

const Training = () => {
  const router = useRouter()
  const {category, minutes} = router.query

  return (
    <Layout overflow="scroll" h="100vh" lightColor={'white'}>
      <Header />
      <TrainingView minutes={minutes} category={category} />
    </Layout>
  )
}

export default Training
