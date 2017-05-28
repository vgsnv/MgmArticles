interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly isDeleted: boolean;
};

const ARTICLES_ADD = 'ARTICLES_ADD';
const ARTICLES_DELETE = 'ARTICLES_DELETE';

export const articlesAdd = (article: Article) => ({
  type: ARTICLES_ADD,
  data: article
});

export const articlesDelete = (id: string) => ({
  type: ARTICLES_DELETE,
  data: id
});


const DefaultArticle = {
  id: '00001',
  title: 'newArticle',
  value: 900,
  isDeleted: false
}

export interface Articles {
  [key: string]: Article
}

const initialArticles: Articles = {
  '19df4': { id: '19df4', title: 'Макароны', value: 130, isDeleted: false },
  '19df3': { id: '19df3', title: 'Сосиски', value: 240, isDeleted: false },
  '19df5': { id: '19df5', title: 'Доширак', value: 20, isDeleted: false },
};

export const articles = (articles: Articles = initialArticles, action) => {

  switch(action.type){
    case ARTICLES_ADD:
      return {...articles, [action.data.id]: action.data};
    case ARTICLES_DELETE:
      return {...articles, [action.data]: {...articles[action.data], isDeleted: true } }
    default:
      return articles;
  }

}
