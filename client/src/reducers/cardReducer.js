import { FETCH_CARDS } from '../actions/constants';

export default function(state = null, action) {

  switch (action.type) {
    case FETCH_CARDS:
      return action.payload || false;
    default:
      return state;
  }
}
