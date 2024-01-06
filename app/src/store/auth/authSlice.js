import { createSlice } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '../../common/appConstants';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem(AUTH_TOKEN),
    isAuthenticated: null,
    loading: false,
    user: null,
    profile: null,
  },
  reducers: {
    fetching: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    login: (state, { payload }) => {
      localStorage.setItem(AUTH_TOKEN, payload.token);
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    getUser: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload?.user,
        profile: payload?.profile,
      };
    },
    profileUpdated: (state, { payload }) => {
      return {
        ...state,
        profile: payload?.profile,
      };
    },
    createProfile: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: payload,
      };
    },
    authError: (state) => {
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
});

export const { login, getUser, authError, fetching, logout, createProfile, profileUpdated } = authSlice.actions;
export default authSlice.reducer;
