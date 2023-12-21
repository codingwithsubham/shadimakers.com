import axios from 'axios';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { createProfile, fetching } from '../auth/authSlice';
import {
  API_ROUTE_PUB,
  CREATE_PROF,
  GET_PROFS,
} from '../../common/apiContants';
import { API_CONFIG } from '../../common/constants';
import { getProfiles, profFetching } from './profileSlice';

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
