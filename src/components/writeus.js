import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'
import './writeus.css'

class FormPage extends React.Component {
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
      <MDBContainer>
        <MDBRow
          style={{
            backgroundColor: 'blanchedalmond',
            // borderRadius: '70px',
            padding: '0',
          }}
        >
          <MDBCol md="6" style={{ marginLeft: '162px' }}>
            <form onSubmit={this.handleSubmit}>
              <p style={{ paddingTop: '10px', textAlign: 'center' }}>
                Write to us
              </p>
              <div className="grey-text">
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
                {/* <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  style={{ borderBottomStyle: 'groove' }}
                /> */}
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
                <MDBBtn outline color="secondary" type="submit" value="submit">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default FormPage
