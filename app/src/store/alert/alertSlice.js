import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alerts: []
  },
  reducers: {
    setAlert: (state, { payload }) => {
      return {
        ...state,
        alerts: [...state.alerts, payload],
      };
    },
    removeAlert: (state, { payload }) => {
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== payload),
      };
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
