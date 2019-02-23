import 'bootstrap'
import React from 'react'
import Footer from 'react-materialize/lib/Footer'
import './footer.css'
import { Link } from 'gatsby'

var ulstyle = {
  listStyleType: 'none',
  float: 'right',
  paddingTop: '10px',
}
var lstyle = {
  textDecoration: 'none',
  color: 'black',
}
class Footersection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ color: 'red' }}>
        <Footer
          style={{ color: 'black' }}
          copyrights="&copy 2018 Copyright"
          moreLinks={
            <a
              style={{
                paddingLeft: '10px',
                textDecoration: 'none',
                color: 'black',
              }}
              href="www.google.com"
            >
              Lucifier
            </a>
          }
          links={
            <ul style={ulstyle}>
              <li>
                <Link style={lstyle} to="/about/">
                  About Us
                </Link>
              </li>
              <li>
                <Link style={lstyle} to="/studentdetails/">
                  Student Details
                </Link>
              </li>
              <li>
                <Link style={lstyle} to="/gallery/">
                  Events Gallery
                </Link>
              </li>
              <li>
                <Link style={lstyle} to="/donate/">
                  Contribute
                </Link>
              </li>
              <li>
                <Link style={lstyle} to="/activities/">
                  Activities
                </Link>
              </li>
            </ul>
          }
          className="example"
        >
          <h5
            style={{
              color: 'black',
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
            <br />
            <a
              style={{ color: 'black' }}
              href="mailto:malarummottugaltrustkarur@gmail.com"
            >
              malarummottugaltrustkarur@gmail.com
            </a>
          </h5>

          <p className="grey-text text-lighten-4" />
        </Footer>
      </div>
    )
  }
}

export default Footersection
