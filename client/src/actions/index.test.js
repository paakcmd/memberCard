import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { fetchUser, fetchHistory, fetchCards } from './index';
import { FETCH_USER, FETCH_HISTORIES, FETCH_CARDS } from './constants';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ auth: null, history: null, cards: null });

describe('fetchUser', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates FETCH_USER after successfuly fetching user', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1234 }
      });
    });

    const expectedActions = [{ type: FETCH_USER, payload: { id: 1234 } }];

    return store.dispatch(fetchUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchHistory', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates FETCH_HISTORIES after successfuly fetching histories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { his: 1 }
      });
    });

    const expectedActions = [
      { payload: { id: 1234 }, type: 'FETCH_USER' },
      { payload: { his: 1 }, type: 'FETCH_HISTORIES' }
    ];

    return store.dispatch(fetchHistory()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchCards', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates FETCH_CARDS after successfuly fetching cards', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { cards: 1 }
      });
    });

    const expectedActions = [
      { payload: { id: 1234 }, type: 'FETCH_USER' },
      { payload: { his: 1 }, type: 'FETCH_HISTORIES' },
      { payload: { cards: 1 }, type: 'FETCH_CARDS' }
    ];

    return store.dispatch(fetchCards()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
