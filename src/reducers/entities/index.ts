import { combineReducers } from 'redux';
import { articles } from './articles';
import { articlesMode } from './articlesMode'


const entities = combineReducers({
  articles,
  articlesMode
})

export default entities;