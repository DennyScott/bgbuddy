import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import group from './group';
import createGroup from './create-group';
import landingPage from './landing-page';
import meetup from './meetup';
import myGroups from './my-groups';

const rootReducer = combineReducers({ group, createGroup, landingPage, meetup, myGroups, routing: routerReducer});

export default rootReducer;
