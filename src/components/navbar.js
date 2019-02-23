import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/Mylogo.jpeg'
import './navbar.css'

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { siteTitle } = this.props

    return (
      <div>
        <nav
          style={{ backgroundColor: 'white' }}
          class="navbar navbar-expand-lg navbar-dark"
        >
          <div className="sample">
            <div style={{ display: 'flex' }}>
              <div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#basicExampleNav"
                  aria-controls="basicExampleNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ float: 'left', backgroundColor: 'black' }}
                >
                  <span class="navbar-toggler-icon" />
                </button>
              </div>
              <div>
                <a
                  style={{ color: 'black' }}
                  class="navbar-brand"
                  href="_blank"
                >
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                    className="logo"
                  >
                    <img
                      src={logo}
                      alt="alternate"
                      style={{ height: '30px', paddingRight: '5px' }}
                    />
                    {siteTitle}
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="_blank">
                  <Link className="Linkstyle" to="/Home/">
                    Home
                  </Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="_blank">
                  <Link className="Linkstyle" to="/about/">
                    AboutUs
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="_blank">
                  <Link className="Linkstyle" to="/activities/">
                    Activities
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="_blank">
                  <Link className="Linkstyle" to="/donate">
                    Get Involved
                  </Link>
                </a>
              </li>
              <li class="nav-item dropdown ">
                <a
                  // style={{ color: 'black' }}
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="_blank"
                >
                  Gallery
                </a>
                <div
                  class="dropdown-menu dropdown-primary blue"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="_blank">
                    <Link style={{ color: 'black' }} to="/gallery/">
                      Educational Programs
                    </Link>
                  </a>
                  <a class="dropdown-item" href="_blank">
                    <Link style={{ color: 'black' }} to="/contact/">
                      Other Programs
                    </Link>
                  </a>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="_blank">
                  <Link className="Linkstyle" to="/contact/">
                    Contact Us
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
