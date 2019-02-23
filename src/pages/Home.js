import React from 'react'
import HomeContent from '../components/home'
import Layout from '../components/layout'
import FormPage from '../components/footer1'

const Home = () => (
  <Layout>
    <div>
      <HomeContent />
    </div>
    <div className="footer">
      <FormPage />
    </div>
  </Layout>
)

export default Home
