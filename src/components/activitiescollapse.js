import { MDBBtn, MDBCollapse } from 'mdbreact'
import React, { Component } from 'react'
import './activitiescollapse.css'
import image from '../images/391833.pdf'

class CollapsePage extends Component {
  state = {
    collapseID: '',
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }))
  }

  render() {
    return (
      <>
        <div>
          <div>
            {/* <img className="image1" src={this.props.image} alt="Avatar" /> */}
          </div>
          <div>
            <MDBBtn
              color="primary"
              onClick={this.toggleCollapse('basicCollapse')}
              style={{
                marginBottom: '1rem',
                width: '500px',
                color: 'black',
                marginLeft: '120px',
                marginTop: '50px',
              }}
            >
              {/* {this.props.heading} */}
              <a style={{ color: 'aliceblue' }} href={image}>
                click here for student list
              </a>
            </MDBBtn>
            <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
              <div>
                {/* <Bankdetails /> */}
                {/* <Gallerys /> */}
                {this.props.children}
              </div>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </p>
            </MDBCollapse>
          </div>
        </div>
      </>
    )
  }
}

export default CollapsePage
