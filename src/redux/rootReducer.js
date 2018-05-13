import { combineReducers } from 'redux';

import colors from './colors';
import lastViewed from './lastViewed';
import progress from './progress';
import settings from './settings';

const rootReducer = combineReducers({
  colors,
  lastViewed,
  progress,
  settings,
});

export default rootReducer;
