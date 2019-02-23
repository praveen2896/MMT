import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'

class FormPage1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    // console.log(event.target.name + "" + event.target.value);
  }

  handleSubmit = event => {
    event.preventDefault()
    alert('Thank you ' + this.state.name)
    this.setState({
      name: '',
      email: '',
      message: '',
    })
    const { name, email, message } = this.state
    var result = (async () => {
      const rawResponse = await fetch(
        'https://us-central1-hostingand-demo.cloudfunctions.net/contacts',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: name,
            firstemail: email,
            firstmessage: message,
          }),
        }
      )
        .then(response => {
          if (response.ok) {
            console.log(response.json())
            return response.json()
          } else {
            console.log('errorrrrrr')
            throw new Error('Something went wrong')
          }
        })
        .then(responseJson => {
          console.log(responseJson)
        })
        .catch(error => {
          console.log(error)
        })
      const content = await rawResponse.json()

      console.log(content)
    })()
    console.log('result' + result)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <section className="contact-section my-5">
            <MDBCard >
              <MDBRow style={{ backgroundColor: 'bisque' }}>
                <MDBCol lg="8">
                  <MDBCardBody className="form">
                    <h3 className="mt-4">
                      <MDBIcon icon="envelope" className="pr-2" />
                      Write to us:
                    </h3>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            className="buttons"
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            success="right"
                            size="35"
                            style={{ borderBottomStyle: 'groove' }}
                            required
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{ borderBottomStyle: 'groove' }}
                            required
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="textarea"
                            rows="2"
                            label="Your message"
                            icon="pencil-alt"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            style={{ borderBottomStyle: 'groove' }}
                            required
                          />
                        </div>
                        <div className="text-center">
                          <MDBBtn
                            outline
                            color="secondary"
                            type="submit"
                            value="submit"
                          >
                            Send{' '}
                            <MDBIcon far icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBCardBody className="contact text-center h-100 black-text">
                    <h3 className="my-4 pb-2">Contact information</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          {/* <MDBIcon icon="map-marker-alt" className="pr-2" /> */}
                          Malarum Mottugal Manithaneya Amaippu
                        </p>
                        <p>Reg No- 5/2018</p>
                      </li>

                      <p>Karur Branch:</p>
                      <li>
                        <p>
                          <MDBIcon icon="map-marker-alt" className="pr-2" />
                          Kudil Street,Karur
                        </p>
                      </li>
                      <li>
                        {' '}
                        <p>Pallipalayam Branch:</p>
                        <p>
                          <MDBIcon icon="map-marker-alt" className="pr-2" />
                          Kudil Street,Karur
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="phone" className="pr-2" />
                          +91 9566398589
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="envelope" className="pr-2" />
                          malarummottugaltrustkarur@gmail.com
                        </p>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </section>
        </form>
      </div>
    )
  }
}

export default FormPage1
