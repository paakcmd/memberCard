import { FETCH_USER } from '../actions/constants';
import authReducer from './authReducer';

describe('authReducer', () => {
  it('initializes the state as null', () => {
    expect(authReducer(null, {})).toEqual(null)
  })

  it('fetches and sets the user data', () => {
    const mockupUser = 'user';
    expect(authReducer({}, {type: FETCH_USER, payload: mockupUser })).toEqual(mockupUser)
  })
})
