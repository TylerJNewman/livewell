import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import Home from 'src/components/sections/Home'

const App = () => (
  <Layout overflow="scroll">
    <Header />
    <Home />
  </Layout>
)

export default App
