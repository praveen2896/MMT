import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Imageslider from '../components/imageslider'
import './home.css'

class HomeContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.0/bootstrap.min.js" />
        {/* <div className="Imagecontainer">
        <img className="image" src={image} alt="Avatar" />
        </div> */}

        <div className="aboutcard">
          <div
            className="aboutcontainer"
            style={
              {
                // // paddingTop: '25px',
                // paddingBottom: '25px',
                // paddingRight: '25px',
              }
            }
          >
            {/*
             */}
            <Imageslider />
          </div>
          <div
            className="aboutcontainer"
            style={{
              paddingTop: '25px',
              paddingBottom: '25px',
              paddingLeft: '25px',
              paddingRight: '25px',
              textAlign: 'Justify',
            }}
          >
            <br />
            <div class="h-100 row align-items-center">
              <div class="col">
                <h4 style={{ textAlign: 'center' }}>
                  <b>"Our Motto"</b>
                </h4>
                <p style={{ textAlign: 'center' }}>
                  'No one should be denied of right to education and access to
                  basic necessities of life'
                </p>
              </div>
            </div>
            <br />
            <div class="h-100 row align-items-center">
              <div class="col">
                <p style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    India recognizes education as a fundamental right of every
                    child -
                  </b>
                  The Constitution (Eighty-sixth Amendment) Act, 2002 inserted
                  Article 21-A in the Constitution of India
                </p>
              </div>
            </div>
            <div class="h-100 row align-items-center">
              <div class="col">
                <ul>
                  <li>
                    <p>
                      36 children received scholarships worth Rs.5000/- each{' '}
                    </p>
                  </li>
                  <li>
                    <p>
                      Free tuitions for 25 students from Government schools{' '}
                    </p>
                  </li>
                  <li>
                    <p>
                      4 orphan children are supported with yearly school fees{' '}
                    </p>
                  </li>
                  <li>
                    <p>Facilitated --- Blood donation camps. </p>
                  </li>
                </ul>
              </div>
            </div>
            <br />
          </div>
          <div class="h-100 row align-items-center">
            <div
              className="visionname"
              style={{
                paddingTop: '25px',
                paddingBottom: '25px',
                paddingLeft: '45px',
                paddingRight: '25px',
                textAlign: 'Justify',
              }}
            >
              <p>Vision:</p>
              <p>
                "Our Vision is to bring in equity and equality in the society
                through education and promotion of health and well being".
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent
