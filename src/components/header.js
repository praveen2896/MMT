import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link } from 'gatsby'
import './header.css'
import Navigation from './nav'

const Header = ({ siteTitle, donate, contact }) => (
  <div
    style={{
      background: '#ff6666',
    }}
  >
    {/* <PageHeader>
  Example page header <small>Subtext for header</small>
  
    </PageHeader> */}
    <div
      style={{
        margin: '0',
        padding: '1.45rem 1.0875rem ',
      }}
    >
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      />
      <Link
        to="/"
        style={{
          color: ' #e60000',
          textDecoration: 'none',
          margin: 0,
          fontSize: '3em',
          fontFamily: 'monospace',
        }}
      >
        {siteTitle}
      </Link>
      <Link
        to="/donate/"
        style={{
          color: '#99ffff',
          textDecoration: 'none',
          margin: '0em 3rem',
          fontSize: '1.5em',
          fontFamily: 'italic',
          float: 'right',
          padding: '1rem',
        }}
      >
        <i class="fa fa-hand-holding-usd" style={{ marginRight: '0.5rem' }} />
        {donate}
      </Link>
      <Link
        to="/contact/"
        style={{
          color: ' #99ffff',
          textDecoration: 'none',
          margin: 0,
          fontSize: '1.5em',
          fontFamily: 'italic',
          float: 'right',
          padding: '1rem',
        }}
      >
        <i class="fas fa-address-card" style={{ marginRight: '0.5rem' }} />
        {contact}
      </Link>
    </div>

    <div>
      <Navigation />

      {/* <Example/> */}
    </div>
  </div>
)

export default Header
