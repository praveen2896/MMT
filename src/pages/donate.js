import React from 'react'
import Bankdetails from '../components/bankdetails'
import FormPage from '../components/footer1'
import Layout from '../components/layout'

const Donate = () => (
  <Layout>
    <div
      style={{
        paddingBottom: '370px',
        backgroundColor: '#ffcccc',
        paddingTop: '20px',
      }}
    >
      <p
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '20px',
        }}
      >
        We believe that charity can come in any form , be it money, time or
        effort. We accept and acknowledge any form of charity that comes from
        you.{' '}
      </p>
      <p style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        Come on! Bring about a change in the lives of the needy through the best
        possible way of yours!
      </p>
      <div>
        <ul>
          <li>
            For donating your time and effort, contact us and express your
            interest.
          </li>
          <li>
            For financial aids*, transactions in the form of online
            transactions, cheques and Demand Drafts (DD) are accepted.
          </li>
        </ul>
        <p style={{ paddingLeft: '20px', fontSize: '15px' }}>
          * eligible for 80G Tax exemption
        </p>
      </div>
      <div>
        <Bankdetails />
      </div>
      {/* <div style={{ backgroundColor: 'red' }}>
        <div>
          <CollapsePage heading="Sponsor a Student" image={image} />
        </div>
        <div>
          <CollapsePage heading="Bank Details" image={image}>
            {' '}
            <Bankdetails />
          </CollapsePage>
        </div>
      </div> */}
    </div>
    <div className="footer">
      <FormPage />
    </div>
  </Layout>
)

export default Donate
