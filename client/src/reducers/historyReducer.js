import { FETCH_HISTORY } from '../actions/constants';

export default function(state = null, action) {

  switch (action.type) {
    case FETCH_HISTORY:
      return action.payload
    default:
      return state;
  }
}
