import { FETCH_HISTORY } from '../actions/constants';
import historyReducer from './historyReducer';


describe('historyReducer', () => {
  it('initializes the state as null', () => {
    expect(historyReducer(null, {})).toEqual(null)
  })

  it('fetches and sets the bitcoin data', () => {
    const mockupHistory = 'history';
    expect(historyReducer({}, {type: FETCH_HISTORY, payload: mockupHistory })).toEqual(mockupHistory)
  })
})
