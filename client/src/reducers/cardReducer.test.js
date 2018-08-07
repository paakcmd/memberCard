import { FETCH_CARDS } from '../actions/constants';
import cardReducer from './cardReducer';

describe('cardReducer', () => {
  it('initializes the state as null', () => {
    expect(cardReducer(null, {})).toEqual(null);
  });

  it('fetches and sets the user data', () => {
    const mockupcards = 'cards';
    expect(
      cardReducer({}, { type: FETCH_CARDS, payload: mockupcards })
    ).toEqual(mockupcards);
  });
});
