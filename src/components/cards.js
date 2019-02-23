import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './cards.css'
import image from '../images/Apj.jpeg'

class Activities extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div
        className="row"
        style={{
          backgroundColor: '#ffcccc',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        />
        <div className="column">
          <div className="cards">
            <img className="image1" src={image} alt="Avatar" />
            <div className="container1">
              <p>$100</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cards">
            <img className="image1" src={image} alt="Avatar" />
            <div className="container1">
              <p>$100</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cards">
            <img className="image1" src={image} alt="Avatar" />
            <div className="container1">
              <p>$100</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cards">
            <img className="image1" src={image} alt="Avatar" />
            <div className="container1">
              <p>$100</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Activities
