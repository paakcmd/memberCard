import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchUser, fetchHistory } from './index';
import { FETCH_USER, FETCH_HISTORY } from './constants';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ auth: null, history: null });



describe('fetch user', () => {
  const mockResponse = { id: '1234' }
  fetchMock.get('/api/current_user', mockResponse)

  it('creates an async action to fetch the user', () => {
    const expectedActions = [{payload: mockResponse.body, type: FETCH_USER }];

    return store.dispatch(fetchUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
  });

  })
})
