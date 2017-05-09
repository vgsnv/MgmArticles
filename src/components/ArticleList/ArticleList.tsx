import * as React from 'react';
import * as css from './ArticleList.styl';

import { ArticleBox} from './Article/Article';

interface Article{
  id: string;
  title: string;
  value: number;
}
 
interface Props{
  articles: Array<Article>
};

interface State{

};

export class ArticleList extends React.Component<Props, State> {

  private getArticles(){

    const {
      articles
    } = this.props;

    console.log('getArticles', articles);

    return articles.map(article => {
      return(<ArticleBox key={article.id} {...article}/>);
    })
    
  };

  render(){

    console.log('ArticleList props', this.props);

    return(<div id={css.articleList}>
      {this.getArticles()}
    </div>);

  };
};