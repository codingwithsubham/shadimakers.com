import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profLoading: false,
    profiles: [],
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
  },
});

export const { getProfiles, profFetching } = profileSlice.actions;
export default profileSlice.reducer;
