import axios from 'axios';
import { FETCH_USER, FETCH_HISTORY } from './constants';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHistory = () => async dispatch => {
  const res = await axios.get('/api/get/transaction');
  dispatch({ type: FETCH_HISTORY, payload: res.data })
}
