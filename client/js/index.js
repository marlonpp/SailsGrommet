// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
require('../scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import CloudMaster from './containers/CloudMaster';

const store = configureStore();

// Log the initial state
console.log('Initial State:',store.getState());

render(
  <Provider store={store}>
    <CloudMaster />
  </Provider>,
  document.getElementById('content')
);

document.body.classList.remove('loading');
