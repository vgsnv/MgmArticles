import * as React from 'react';
import * as css from './ArticleList.styl';

import { Article, Props as ArticleProps, Dispatch as ArticleDispatch } from './Article/Article';
import { ArticleListHeader } from './ArticleListHeader/ArticleListHeader';
import { State } from 'flow/model';
 
export interface Props{
  articles: State.articles;
  articlesMode: string;
};

export interface Dispatch{
  onClickTitle: () => void;
  onClickValue: () => void;
  onSelectClick: (id: string) => void;
};

interface State{

};

export class ArticleList extends React.Component<Props & Dispatch, State> {

  private getArticles(){

    const {
      articles,
      articlesMode,
      onSelectClick
    } = this.props;

    console.log('getArticles', articles);

    return articles.map(article => {

      const ItemArticle: ArticleProps & ArticleDispatch = {
        articlesMode: articlesMode,
        onSelectClick: onSelectClick,
        id: article.id,
        title: article.title,
        value: article.value
      }

      return(<Article
              key={article.id}
              {...ItemArticle}/>);
    })
    
  };

  render(){

    console.log('ArticleList props', this.props);

    const getArticles = this.getArticles();

    const {
      articlesMode,
      onClickTitle,
      onClickValue
    } = this.props

    return(<table id={css.articleList}>
      <ArticleListHeader
        articlesMode = {articlesMode}
        onClickHeadTitle = {onClickTitle}
        onClickHeadValue = {onClickValue}/>
      <tbody>{getArticles}</tbody>
    </table>);

  };
};