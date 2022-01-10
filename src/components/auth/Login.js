import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import isEmpty from 'is-empty';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">

        <div className="header text-center col-sm-12">
          <h2 style={{
            marginTop: "4rem"
          }}>
            Login Page
          </h2>
        </div>
        <main className="col-sm-12">
          <div className="input-group">
            <span
              className="input-group-addon"><i className="fa fa-user"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              id="email" />
          </div>
          {!isEmpty(errors.email) || !isEmpty(errors.emailnotfound) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.email}
              {errors.emailnotfound}
            </div>
          ) : ""}
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-key"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              type="password"
              placeholder="Password"
              className="form-control"
              id="password" />
          </div>
          {!isEmpty(errors.password) || !isEmpty(errors.passwordincorrect) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.password}
              {errors.passwordincorrect}
            </div>
          ) : ""}
          <div className="row">
            <div className="col-sm-10 checkbox"
              style={{ marginLeft: "2rem" }}>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                />
              Remember me</label>
            </div>
            <div className="col-sm-1" style={{
              marginLeft: "2rem"
            }}>
              <button
                onClick={this.onSubmit}
                type="submit"
                className="btn btn-danger font-weight-bold"
                style={{ marginLeft: "20px" }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col s12" style={{ marginTop: "2rem" }}>
            If you don't have an account {" "}
            <a
              href="/register"
            >
              Click Here{" "}
            </a>
            to Register
          </div>
        </main>
      </div >
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);