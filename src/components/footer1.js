import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Malarum Mottugal</h5>
            <p>
              " Education is the most powerful weapon which you can use to
              change the world.”
            </p>
          </MDBCol>
          <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item">
              <a
                href="https://twitter.com/MalarumMottugal"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                <MDBIcon fab icon="twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="mailto:malarummottugaltrsutkarur@gmail.com"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                {/* <MDBIcon fab icon="message" /> */}
                <MDBIcon icon="envelope" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" target="_blank" className="p-2 fa-lg w-ic">
                <MDBIcon fab icon="facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.youtube.com/channel/UCDnQ8hPAjMDSUZJR8RvjQmg"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                <MDBIcon fab icon="youtube" />
              </a>
            </li>
          </ul>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href="https://www.MDBootstrap.com"> Lucifier.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default FooterPage
