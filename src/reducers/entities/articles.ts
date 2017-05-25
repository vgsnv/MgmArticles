interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly isSelected: boolean;
  readonly isDeleted: boolean;
};

const ARTICLES_ADD = 'ARTICLES_ADD';
const ARTICLES_SELECT = 'ARTICLES_SELECT';

export const articlesAdd = (article: Article) => ({
  type: ARTICLES_ADD,
  data: article
});

export const articlesSelect = (id: string) => ({
  type: ARTICLES_SELECT,
  data: id
});

const DefaultArticle = {
  id: '00001',
  title: 'newArticle',
  value: 900,
  isSelected: false,
  isDeleted: false
}

export interface Articles {
  [key: string]: Article
}

const initialArticles: Articles = {
  '19df4': { id: '19df4', title: 'Макароны', value: 130, isSelected: false, isDeleted: false },
  '19df3': { id: '19df3', title: 'Сосиски', value: 240, isSelected: false, isDeleted: false },
  '19df5': { id: '19df5', title: 'Доширак', value: 20, isSelected: false, isDeleted: false },
};

export const articles = (articles: Articles = initialArticles, action) => {

  switch(action.type){
    case ARTICLES_ADD:
      return {...articles, [action.data.id]: action.data};
    case ARTICLES_SELECT:
      return {...articles, [action.data]: {...articles[action.data], isSelected: true } }
    default:
      return articles;
  }

}
