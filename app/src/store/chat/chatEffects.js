import axios from 'axios';
import { DANGER } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { API_ROUTE_PUB, GET_CHAT, GET_CONV } from '../../common/apiContants';
import { API_CONFIG } from '../../common/constants';

// get chats
export const getChats = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_ROUTE_PUB}${GET_CHAT}${id}`, API_CONFIG);
    return res.data;
  } catch (err) {
    dispatch(displayAlert('Can not fetch chats', DANGER));
  }
};

// get Conversations
export const getConversation = (from, to) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_ROUTE_PUB}${GET_CONV}`,
      { from, to },
      API_CONFIG
    );
    return res.data;
  } catch (err) {
    dispatch(displayAlert('Can not fetch conversation', DANGER));
  }
};
