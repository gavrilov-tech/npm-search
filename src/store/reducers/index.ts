import { combineReducers } from 'redux';

import repositories from './repositories';

export type RootState = ReturnType<typeof reducers>;

export const reducers = combineReducers({
  repositories
});
