import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './newcontact.css'
import FormPage1 from './writeus1'
import { MDBTooltip } from 'mdbreact'

class AboutContact extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        {/* <div className="Imagecontainer">
        <img className="image" src={image} alt="Avatar" />
        </div> */}
        <div className="contactcard">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          />
          <div
            className="aboutcontainer"
            style={{
              width: '50%',
              paddingTop: '25px',
              paddingBottom: '25px',
              paddingLeft: '25px',
              paddingRight: '25px',
              textAlign: 'Justify',
              // backgroundColor: 'blue',
            }}
          >
            <div className="iconcontainer" style={{ display: 'flex' }}>
              <MDBTooltip
                placement="bottom"
                tooltipContent="msmpk13@gmail.com"
                style={{ display: 'inline-block' }}
              >
                <a href="mailto:msmpk13@gmail.com">
                  <i class="fas fa-envelope" />
                </a>
              </MDBTooltip>
              <MDBTooltip
                placement="top"
                tooltipContent="https://twitter.com/MalarumMottugal"
              >
                <a href="https://twitter.com/MalarumMottugal">
                  <i class="fab fa-twitter" />
                </a>
              </MDBTooltip>
              <MDBTooltip
                placement="bottom"
                tooltipContent="https://www.youtube.com/channel/UCDnQ8hPAjMDSUZJR8RvjQmg"
              >
                <a
                  href="https://www.youtube.com/channel/UCDnQ8hPAjMDSUZJR8RvjQmg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-youtube" />
                </a>
              </MDBTooltip>
              <MDBTooltip
                placement="top"
                tooltipContent="https://www.google.com"
              >
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook-square" />
                </a>
              </MDBTooltip>
            </div>
           
          </div>
          <div
            className="aboutcontainer1"
            style={{
              width: '50%',
              paddingTop: '90px',
              paddingBottom: '25px',
              paddingRight: '85px',
            }}
          >
            {/* <img className="image" src={image} height="" width="" alt="Avatar" /> */}
            <div style={{ paddingLeft: '50px' }}>
              {}
              <FormPage1 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContact
