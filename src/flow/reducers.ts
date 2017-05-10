import { combineReducers } from 'redux';
import { articles } from './articles';
import { articlesEditingMode } from './articlesEditingMode';

const reducers = combineReducers({
  articles,
  articlesEditingMode,
})

export default reducers;