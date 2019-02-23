import React from 'react'
import CollapsePage from '../components/activitiescollapse'
import FormPage from '../components/footer1'
import Layout from '../components/layout'
import image from '../images/Apj.jpeg'
import '../styles/activities.css'
import Gallerys from '../components/gallery'
import 'font-awesome/css/font-awesome.min.css'

const Activities1 = () => (
  <Layout>
    <div
      style={{
        paddingBottom: '500px',
        backgroundColor: '#ffcccc',
        paddingTop: '40px',
      }}
    >
      <div
        className="heading"
        style={{ paddingLeft: '120px', paddingTop: '35px' }}
      >
        <p>
          <p>
            <u>
              <b>Key Activities</b>
            </u>
          </p>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We provide education scholarships for children from underprivileged
            communities.
          </span>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We bear the complete school fees of orphans/ abandoned children.
          </span>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We provide education scholarships for children from underprivileged
            communities.
          </span>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We provide education scholarships for children from underprivileged
            communities.
          </span>
        </p>
      </div>
      <div className="heading" style={{ paddingLeft: '120px' }}>
        <p>
          <p>
            <u>
              <b>Other Activities</b>
            </u>
          </p>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We encourage and motivate students to take part in social activities
            like blood donation camps and similar community services.
          </span>
        </p>
        <p>
          {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ paddingLeft: '60px' }}
          />
          <span style={{ paddingLeft: '20px' }}>
            {' '}
            We also conduct activities at old age homes during important
            festivals /occasions to engage our senior citizens.
          </span>
        </p>
      </div>
      <div>
        <CollapsePage heading="2019" image={image}>
          <Gallerys />
        </CollapsePage>
      </div>
    </div>

    <div className="footer">
      <FormPage />
    </div>
  </Layout>
)

export default Activities1
