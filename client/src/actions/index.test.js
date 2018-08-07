import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchUser, fetchHistory, fetchCards } from './index';
import { FETCH_USER, FETCH_HISTORIES, FETCH_CARDS } from './constants';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ auth: null, history: null });

describe('fetchUser', () => {
  const mockResponse = { id: '1234' };
  fetchMock.get('http://localhost:5000/api/current_user', mockResponse);

  it('creates an async action to fetch the user', () => {
    const expectedActions = [{ payload: mockResponse.body, type: FETCH_USER }];

    return store.dispatch(fetchUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchCards', () => {
  const mockResponse = [{ cards: '1234' }];
  fetchMock.get('/api/get/merchants', mockResponse);

  it('creates an async action to fetch the transctions', () => {
    const expectedActions = [{ payload: mockResponse.body, type: FETCH_CARDS }];

    return store.dispatch(fetchCards()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchHistory', () => {
  const mockResponse = [{ transaction1: '1234' }];
  fetchMock.get('/api/get/transaction', mockResponse);

  it('creates an async action to fetch the transctions', () => {
    const expectedActions = [
      { payload: mockResponse.body, type: FETCH_HISTORIES }
    ];

    return store.dispatch(fetchHistory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
