import { removeAlert, setAlert } from "./alertSlice";

export const displayAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
    const id = Date.now();
    dispatch(setAlert({ msg, alertType, id }));
    setTimeout(() => dispatch(removeAlert(id)), timeout);
}