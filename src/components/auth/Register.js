import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import isEmpty from 'is-empty';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
      name: "",
      errors: {}
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="header text-center col-sm-12">
          <h2 style={{
            marginTop: "4rem"
          }}>
            Register Page
          </h2>
        </div>
        <main className="col-sm-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              type="text"
              placeholder="Name"
              className="form-control"
              id="name">
            </input>
          </div>
          {!isEmpty(errors.name) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.name};
            </div>
          ) : ""}
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              id="email">
            </input>
          </div>
          {!isEmpty(errors.email) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.email};
            </div>
          ) : ""}
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-key"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              type="password"
              name="password"
              placeholder="password"
              className="form-control"
              id="password">
            </input>
          </div>
          {!isEmpty(errors.password) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.password};
            </div>
          ) : ""}
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-check-circle"></i></span>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              type="password"
              name="password2"
              placeholder="Confirm password"
              className="form-control"
              id="password2">
            </input>
          </div>
          {!isEmpty(errors.password2) ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {errors.password2};
            </div>
          ) : ""}
          <div className="row col-sm-12 form-group">
            <div className="col-sm-4 checkbox">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                />
              Remember me</label>
            </div>
            <div className="col-sm-4">
              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-danger font-weight-bold align-right"
              >
                Register
            </button></div>
          </div>
        </main>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));