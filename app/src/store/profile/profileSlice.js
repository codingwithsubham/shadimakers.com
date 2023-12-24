import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profLoading: false,
    profiles: [],
    profile: null,
  },
  reducers: {
    profFetching: (state) => {
      return {
        ...state,
        profLoading: true,
      };
    },
    getProfiles: (state, { payload }) => {
      return {
        ...state,
        profLoading: false,
        profiles: payload,
      };
    },
    getProfileByUser: (state, { payload }) => {
      return {
        ...state,
        profLoading: false,
        profile: payload,
      };
    },
  },
});

export const { getProfiles, profFetching, getProfileByUser } = profileSlice.actions;
export default profileSlice.reducer;
