import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ERROR,
  } from "../actions/type";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null,
      error: null,
    };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
          error: null,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          error: payload.error,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          error: null,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: payload.error,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: null,
        };
     
      default:
        return state;
    }
  }
  