import { State, Article } from './model';

//ACTIONS
const ARTICLE_ADD = 'ARTICLE_ADD';
const ARTICLE_DEL = 'ARTICLE_DEL';

const articleAdd = (article: Article) => ({
  type: ARTICLE_ADD,
  data: article
});

const articleDel = (id: string) => ({
  type: ARTICLE_DEL,
  data: id
});

//REDUCERS

export const articles = (state: State.articles = [], action) => {

  switch(action.type){
    case ARTICLE_ADD:
      return [...state, action.data];
    case ARTICLE_DEL:
      return [...state.filter(item => item.id !== action.data)];
    default: 
      return state;
  }

}

