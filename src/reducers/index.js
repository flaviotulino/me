import { combineReducers } from 'redux';
import blog from './blog';
import search from './search';
import elements from './elements';

const reducers = combineReducers({
  blog,
  search,
  elements,
});

export default reducers;
