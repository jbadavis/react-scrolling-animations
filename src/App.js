import React from 'react';
import { render } from 'react-dom';
import Main from './app/main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import animationApp from './app/reducers';

import styles from './scss/base.scss';

const store = createStore(animationApp);

if (module.hot) {
  module.hot.accept();
}

render (
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('container')
);
