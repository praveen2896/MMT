import React from 'react'
import './newheader.css'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
class Heading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { siteTitle } = this.props

    return (
      <div className="header">
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          className="logo"
        >
          {siteTitle}
        </Link>
        <div className="header-right">
          <Link to="/about/">Home</Link>
          <Link to="/activities/">Activities</Link>
          <Link to="/gallery/">Gallery</Link>
          <Link to="/donate/">Get Involved</Link>
          <Link to="/contact/">Contact Us</Link>
        </div>
      </div>
    )
  }
}

Heading.propTypes = {
  siteTitle: PropTypes.string,
}

Heading.defaultProps = {
  siteTitle: '',
}

export default Heading
