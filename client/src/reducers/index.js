import { combineReducers } from 'redux';
import authReducer from './authReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  auth: authReducer,
  history: historyReducer
})
