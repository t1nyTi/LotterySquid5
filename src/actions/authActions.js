import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from './types';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      history.push("/login");
      console.log(res);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save To localStorage

      //set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      //set token to auth header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);

      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from local Storage
  localStorage.removeItem("jwtToken");

  //Remove auth header for future requests
  setAuthToken(false);

  //Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}