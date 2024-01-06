import axios from 'axios';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { createProfile, fetching } from '../auth/authSlice';
import {
  ADD_MATCH,
  API_ROUTE_PUB,
  APPROVE_MATCH,
  CREATE_PROF,
  GET_PROF,
  GET_PROFS,
  UPDATE_PHOTOS,
  UPDATE_PROF,
} from '../../common/apiContants';
import { API_CONFIG } from '../../common/constants';
import { getProfiles, profFetching } from './profileSlice';
import { loadUser } from '../auth/authEffect';

// Create Profile
export const buildProfile = (body) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.post(
      `${API_ROUTE_PUB}${CREATE_PROF}`,
      body,
      API_CONFIG
    );
    dispatch(createProfile(res.data));
    dispatch(displayAlert('Profile Created Successfully', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not create Profile', DANGER));
  }
};

// Update Profile
export const updateProfile = (body) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.post(
      `${API_ROUTE_PUB}${UPDATE_PROF}`,
      body,
      API_CONFIG
    );
    dispatch(createProfile(res.data));
    dispatch(displayAlert('Profile Updated Successfully', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not create Profile', DANGER));
  }
};

// add photos
export const updatePhotos = (body) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.post(
      `${API_ROUTE_PUB}${UPDATE_PHOTOS}`,
      body,
      API_CONFIG
    );
    dispatch(createProfile(res.data));
    dispatch(displayAlert('Profile Updated Successfully', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not create Profile', DANGER));
  }
};

// get Profiles
export const fetchProfiles = (filter) => async (dispatch) => {
  try {
    dispatch(profFetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_PROFS}?${filter}`,
      API_CONFIG
    );
    dispatch(getProfiles(res.data));
  } catch (err) {
    dispatch(displayAlert('Could not fetch Profiles', DANGER));
  }
};

// get Profiles
export const fetchProfileByUser = (user) => async (dispatch) => {
  try {
    dispatch(profFetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_PROF}/${user}`,
      API_CONFIG
    );
    return (res.data);
  } catch (err) {
    dispatch(displayAlert('Could not fetch Profile', DANGER));
  }
};

// request a match
export const requestMatch = (id) => async (dispatch) => {
  try {
    await axios.post(
      `${API_ROUTE_PUB}${ADD_MATCH}`,
      {id},
      API_CONFIG
    );
    dispatch(loadUser());
    dispatch(displayAlert('Match Request Sent', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not add to a Match', DANGER));
  }
};

// request a match
export const approveMatch = (id) => async (dispatch) => {
  try {
    await axios.post(
      `${API_ROUTE_PUB}${APPROVE_MATCH}`,
      {id},
      API_CONFIG
    );
    dispatch(loadUser());
    dispatch(displayAlert('Match Approved', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not approve this Match', DANGER));
  }
};