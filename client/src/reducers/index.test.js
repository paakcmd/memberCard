import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({
      auth: null,
      history: null,
      cards: null
    });
  });
});
