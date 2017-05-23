import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './app/components/Header/Header';
import Main from './app/main';

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
