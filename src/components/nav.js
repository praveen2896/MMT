import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link } from 'gatsby'
import './Navs.css'

var ulstyle = {
  listStyleType: 'none',
}
class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this

    return (
      <div className="container1">
        <ul style={ulstyle}>
          <li>
            <Link to="/about/">About Us</Link>
          </li>
          <li>
            <Link to="/studentdetails/">Student Details</Link>
          </li>
          <li>
            <Link to="/gallery/">Events Gallery</Link>
          </li>
          <li>
            <Link to="/contribute/">Contribute</Link>
          </li>
          <li>
            <Link to="/activities/">Activities</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation
