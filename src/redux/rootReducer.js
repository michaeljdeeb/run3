import { combineReducers } from 'redux';

import colors from './colors';
import progress from './progress';
import settings from './settings';

const rootReducer = combineReducers({
  colors,
  progress,
  settings,
});

export default rootReducer;
