import axios from 'axios';
import { DANGER } from '../../common/appConstants';
import { FILE_CONFIG } from '../../common/constants';
import { displayAlert } from '../alert/alertEffects';
import { API_ROUTE_PUB, FILE_UPLOAD } from '../../common/apiContants';

export const uploadFile = (file) => async (dispatch) => {
  const formData = new FormData();
  formData.append('myFile', file, file.name);
  try {
    const res = await axios.post(`${API_ROUTE_PUB}${FILE_UPLOAD}`, formData, FILE_CONFIG)
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch(displayAlert('Can not be Uploaded', DANGER));
  }
};
