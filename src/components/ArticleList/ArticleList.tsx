import * as React from 'react';
import * as css from './ArticleList.styl';

import { Article, Props as ArticleProps, Dispatch as ArticleDispatch } from './Article/Article';
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

  private getArticleListHeader(){

      console.log('ArticleListHeader props', this.props);

      const {
        articlesMode,
        onClickTitle,
        onClickValue
      } = this.props

      return(<thead id={css.articleListHeader}>
        <tr>
          { articlesMode === 'DELETING' &&
          <th>Выбрать</th> }
          <th onClick={onClickTitle} >Заголовок</th>
          <th onClick={onClickValue} >Значение</th></tr>
      </thead>);

  }

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

       const onInputClick = (e) =>{

        e.preventDefault();

        onSelectClick(article.id);

      }

      return(<tr key={article.id} className={css.article}>
        { articlesMode === 'CHANGING' &&
        <td className={css.articleSelect}><input onClick={onInputClick} type="checkbox" /> </td> }
        <td className={css.artilceTitle} >{article.title}</td>
        <td className={css.artilceValue}>{article.value}</td>
      </tr>);

    })
    
  };

  render(){

    console.log('ArticleList props', this.props);

    const getArticles = this.getArticles();
    const getArticleListHeader = this.getArticleListHeader();
    
    return(<table id={css.articleList}>
            { getArticleListHeader }
            <tbody>{ getArticles }</tbody>
    </table>);

  };
};