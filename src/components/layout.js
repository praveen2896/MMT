import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
// import Heading from '../components/newheader'
import './layout.css'
import Navbar from '../components/navbar'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            about
            contact
            donate
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header
          siteTitle={data.site.siteMetadata.title}
          about={data.site.siteMetadata.about}
          contact={data.site.siteMetadata.contact}
          donate={data.site.siteMetadata.donate}
        /> */}
        {/* <Heading siteTitle={data.site.siteMetadata.title} /> */}
        <Navbar siteTitle={data.site.siteMetadata.title} />

        <div
          style={{
            margin: '0 auto',
          }}
        >
          {children}
        </div>
        {/* <div className="Activitiesfooter">
          <Footer/>
          </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
