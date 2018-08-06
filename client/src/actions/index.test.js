import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchUser, fetchHistory } from './index';
import { FETCH_USER, FETCH_HISTORIES } from './constants';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ auth: null, history: null });



describe('fetchUser', () => {
  const mockResponse = { id: '1234' }
  fetchMock.get('/api/current_user', mockResponse)

  it('creates an async action to fetch the user', () => {
    const expectedActions = [{payload: mockResponse.body, type: FETCH_USER }];

    return store.dispatch(fetchUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
  });

  })
})

describe('fetchHistory', () => {
  const mockResponse = [{ transaction1: '1234' }]
  fetchMock.get('/api/get/transaction', mockResponse)

  it('creates an async action to fetch the transctions', () => {
    const expectedActions = [{payload: mockResponse.body, type: FETCH_HISTORIES }];

    return store.dispatch(fetchHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
  });

  })
})
