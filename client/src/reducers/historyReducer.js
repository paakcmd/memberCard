import { FETCH_HISTORIES } from '../actions/constants';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_HISTORIES:
      return action.payload || false;
    default:
      return state;
  }
}
