import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import createGroup from '../data/create-group';
import group from '../data/group';
import landingPage from '../data/landing-page';
import meetup from '../data/meetup';
import myGroups from '../data/my-groups';

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

export default store;
