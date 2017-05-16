export interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly isDeleted: boolean;
};

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

const initialArticles = {
  '19df4': { id: '19df4', title: 'Макароны', value: 130, isDeleted: false },
  '19df3': { id: '19df3', title: 'Сосиски', value: 240, isDeleted: false },
  '19df5': { id: '19df5', title: 'Доширак', value: 20, isDeleted: false },
};

export const articles = (state = initialArticles, action) => {

  switch(action.type){
    case ARTICLE_ADD:
      return {...state, [action.id]: action.data};
    case ARTICLE_DEL:
      return {...state, [action.id]: {...action.data, isDeleted: true}};
    default: 
      return state;
  }

}

