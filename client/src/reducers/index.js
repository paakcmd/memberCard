import { combineReducers } from 'redux';
import authReducer from './authReducer';
import historyReducer from './historyReducer';
import cardReducer from './cardReducer';

export default combineReducers({
  auth: authReducer,
  history: historyReducer,
  cards: cardReducer
});
