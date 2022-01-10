import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Rounded from "./rounded";
import Card from "react-animated-3d-card";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div className="App" style={{ display: "flex", alignItems: 'center', flexDirection: "column" }}>
        <Card
          shineStrength={0.3}
          style={{
            backgroundColor: "pink",
            width: "800px",
            margin: "100px 0",
            color: "purple",
            padding: "20PX 50PX"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h5>Next draw</h5>
            <p>#378 | Draw: Jan 9, 2022, 7:00 PM</p>
          </div>
          <div>
            <h5 style={{ display: "inline-block", margin: "20px 30px 0 0" }}>
              Prize Pot
            </h5>
            <h1 style={{ display: "inline-block" }}>~$142,211</h1>
          </div>
          <div>
            <h5 style={{ display: "inline-block", margin: "20px 30px 0 0" }}>
              Your tickets
            </h5>
            <p style={{ display: "inline-block", margin: "20px 30px 0 0" }}>
              You have 0 ticket this round
            </p>
          </div>
          <div>
            <p style={{ display: "inline-block", margin: "20px 30px 0 0" }}>
              Match the winning number in the same order to share prizes. Current
              prizes up for grabs:
            </p>

            <div style={{ display: "flex", width: "100%", flexFlow: "wrap" }}>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Winner</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Match first 1</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Match first 1</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Match first 1</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Match first 1</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px 20px"
                }}
              >
                <h3>Match first 1</h3>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  197 CAKE
                </div>
                <p>~$2,057</p>
              </div>
            </div>
          </div>
        </Card>
        {/* <button
          style={{
            padding: "8px 16px",
            background: "green",
            color: "white",
            border: "none"
          }}
        >
          Buy Ticket
        </button> */}
        <AwesomeButton
          type="secondary"
          size="large"
          loadingLabel="Wait.."
          releaseDelay="2"
          resultLabel="Success"
          fakePress="false"
          onPress={next => {
            // do a sync/async task then call `next()`
          }}
        // action={(element, next) => doSomethingThenCall(next)}
        >
          BUY TICKET!
        </AwesomeButton>
        <Rounded/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);