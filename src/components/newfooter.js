import 'bootstrap'
import React from 'react'
import Footer from 'react-materialize/lib/Footer'
import './newfooter.css'
import { Link } from 'gatsby'

var ulstyle = {
  listStyleType: 'none',
  float: 'right',
  paddingTop: '10px',
}
var lstyle = {
  textDecoration: 'none',
  color: 'white',
}
class Newfooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Footer
          copyrights="&copy 2015 Copyright"
          moreLinks={
            <a
              style={{
                paddingLeft: '10px',
                textDecoration: 'none',
                color: 'black',
              }}
              href="www.google.com"
            >
              Lucifier Technologies
            </a>
          }
          links={
            // <ul style={ulstyle}>
            //   <li>
            //     <Link style={lstyle} to="/about/">
            //       About Us
            //     </Link>
            //   </li>
            //   <li>
            //     <Link style={lstyle} to="/studentdetails/">
            //       Student Details
            //     </Link>
            //   </li>
            //   <li>
            //     <Link style={lstyle} to="/gallery/">
            //       Events Gallery
            //     </Link>
            //   </li>
            //   <li>
            //     <Link style={lstyle} to="/contribute/">
            //       Contribute
            //     </Link>
            //   </li>
            //   <li>
            //     <Link style={lstyle} to="/activities/">
            //       Activities
            //     </Link>
            //   </li>
            // </ul>
            <Link style={lstyle} to="/activities/">
              Activities
            </Link>
          }
          className="example"
        >
          <h5
            style={{
              color: 'white',
              paddingTop: '10px',
              fontFamily: 'monospace',
            }}
          >
            Malarum Mottugal Manithaneya Amaippu
            <br />
            Reg No- 5/2018,
            <br />
            Karur
            <br />
            +91 9566398589
          </h5>

          <p className="grey-text text-lighten-4" />
        </Footer>
      </div>
    )
  }
}

export default Newfooter
