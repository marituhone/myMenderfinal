import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  ERROR,
} from './type';
// import AuthService from '../services/auth.service';
import { register, login, logout } from '../services/auth.service';
export const registerUser = (identification_number, first_name, last_name, email, password, password2) => {
  return (dispatch) => {
    return register(identification_number, first_name, last_name, email, password, password2)
      .then((response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.message,
        });

        return Promise.resolve();
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      });
  };
};

export const loginUser = (identification_number, password) => {
  return (dispatch) => {
    return login(identification_number, password)
      .then((data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });

        return Promise.resolve();
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    logout();

    dispatch({
      type: LOGOUT,
    });
  };
};

