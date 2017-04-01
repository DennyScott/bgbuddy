import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import createGroup from './data/create-group';
import group from './data/group';
import landingPage from './data/landing-page';
import meetup from './data/meetup';
import myGroups from './data/my-groups';

const defaultState = {
  createGroup,
  group,
  landingPage,
  meetup,
  myGroups
};

const enhancers = compose (
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

//TODO: Work on this
//export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
