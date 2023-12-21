import axios from 'axios';
import {
  API_ROUTE_PUB,
  GET_USER,
  LOGIN,
  REGISTER,
} from '../../common/apiContants';
import { API_CONFIG } from '../../common/constants';
import { authError, fetching, getUser, login, logout } from './authSlice';
import { AUTH_TOKEN, DANGER, SUCCESS } from '../../common/appConstants';
import setAuthToken from '../../utils/setAuthToken';
import { displayAlert } from '../alert/alertEffects';

// Load User
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token) {
    setAuthToken(token);
    try {
      const res = await axios.get(`${API_ROUTE_PUB}${GET_USER}`, API_CONFIG);
      dispatch(getUser(res.data));
    } catch (error) {
      dispatch(displayAlert('Can not get User', DANGER));
    }
  } else {
    dispatch(authError());
  }
};

// Login User
export const userLogin = (body) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.post(`${API_ROUTE_PUB}${LOGIN}`, body, API_CONFIG);
    dispatch(login(res?.data));
    dispatch(loadUser());
    dispatch(displayAlert('Login Successfull', SUCCESS));
  } catch (err) {
    dispatch(authError());
    dispatch(displayAlert('Invalid Credentials', DANGER));
  }
};

// Logout User
export const userLogout = () => async (dispatch) => {
  try {
    dispatch(logout());
    dispatch(displayAlert('Successfully Logged Out', SUCCESS));
  } catch (err) {
    dispatch(authError());
    dispatch(displayAlert("Can't Logout from the System", DANGER));
  }
};

// Register User
export const userRegistration = (body) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.post(
      `${API_ROUTE_PUB}${REGISTER}`,
      body,
      API_CONFIG
    );
    dispatch(login(res.data));
    dispatch(loadUser());
    dispatch(displayAlert('Registration Successfull', SUCCESS));
  } catch (err) {
    dispatch(authError());
    dispatch(displayAlert(err?.response?.data?.error, DANGER));
  }
};
