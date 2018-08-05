import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import reducer from './reducers/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
