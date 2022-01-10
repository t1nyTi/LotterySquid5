import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { Link } from 'react-router-dom';
import PropTyes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  constructor() {
    super();
  }
  render() {
    const isAuth = this.props.auth.isAuthenticated;
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <h1 className="text-white">MERN-<span className="text-strange">AUTH</span></h1>
            </div>

            <div className="nav">
              {!isAuth ?
                (<div className="row" >
                  <div className="col sm6">
                    <a
                      href="/login"
                      className="text-white"
                    >
                      Login
              </a>
                  </div>
                  <div className="col sm6">
                    <a
                      href="/register"
                      className="text-white"
                    >
                      Register
              </a>
                  </div>
                </div>
                ) : (<div className="col sm6">
                  <button
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    style={{ color: "white", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                    onClick={this.onLogoutClick}
                  >
                    Logout
            </button>
                </div>)}
            </div>
          </div>
        </nav>

      </React.Fragment>
    );
  }
}

Navbar.propTypes = ({
  logoutUser: PropTyes.func.isRequired,
  auth: PropTyes.object.isRequired
});

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);