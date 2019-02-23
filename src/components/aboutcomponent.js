import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'

export default class Aboutcomponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="aboutcard" style={{ paddingBottom: '200px' }}>
          <div
            className="aboutcontainer"
            style={{
              paddingTop: '25px',
              paddingBottom: '125px',
              paddingLeft: '25px',
              paddingRight: '25px',
              textAlign: 'Justify',
            }}
          >
            <div
              class="h-100 row align-items-center"
              style={{ paddingLeft: '20px', paddingRight: '20px' }}
            >
              <p style={{ textAlign: 'left' }}>
                <b>Welcome To Malarum Mottukkal,</b>
              </p>
              <p style={{ wordSpacing: '9px' }}>
                Malarum Mottukkal Manidhaneya Amaippu is a registered non-profit
                organisation committed to provide access to education, improving
                health and well being in underprivileged communities.
              </p>
              <p>
                We work primarily in the area of education as we believe that
                education is the only way through which an individual can attain
                holistic development in life.
              </p>
              <p>
                We strongly believe that Education has the power to bring in
                equity and equality in the society as it enables knowledge and
                confidence in an individual progressing him / her towards
                successful career, better quality of life and stability in life.
              </p>
              <p>
                In addition to education, we also work in other areas to promote
                health and well being.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
