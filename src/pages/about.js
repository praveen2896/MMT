import React from 'react'
import Aboutcomponent from '../components/aboutcomponent'
import FormPage from '../components/footer1'
import Layout from '../components/layout'
const AboutPage = () => (
  <Layout>
    <div>
      <Aboutcomponent />
    </div>
    <div className="footer">
      <FormPage />
    </div>
  </Layout>
)

export default AboutPage
