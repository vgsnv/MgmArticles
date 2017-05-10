import * as React from 'react';
import * as css from './ArticleList.styl';

import { ArticleBox} from './Article/Article';
import { ArticleListHeader } from './ArticleListHeader/ArticleListHeader'

interface Article{
  id: string;
  title: string;
  value: number;
}
 
interface Props{
  articles: Array<Article>,
  onClickTitle: () => void,
  onClickValue: () => void,
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

    const getArticles = this.getArticles();

    const {
      onClickTitle,
      onClickValue
    } = this.props

    return(<table id={css.articleList}>
      <ArticleListHeader
        onClickHeadTitle = {onClickTitle}
        onClickHeadValue = {onClickValue}/>
      <tbody>{getArticles}</tbody>
    </table>);

  };
};