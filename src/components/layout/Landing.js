import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col-sm-12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the {" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span>stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <a
                  href="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-danger btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
              </a>
              </div>
              <div className="col-sm-6">
                <a
                  href="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-info btn-large btn-flat waves-effect white black-text"
                >
                  Log In
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;