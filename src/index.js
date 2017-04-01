import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import store from './app/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
