import { combineReducers } from 'redux';
import { articles } from './articles';
import { articlesMode } from './articlesMode';

const reducers = combineReducers({
  articles,
  articlesMode,
})

export default reducers;