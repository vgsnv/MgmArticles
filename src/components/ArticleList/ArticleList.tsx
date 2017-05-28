import * as React from 'react';
import * as css from './ArticleList.styl';
import { Articles } from 'reducers/entities/articles';

export interface Props{
  articles: Articles;
  articlesMode: string;
};

export interface Dispatch{
  onClickTitle: () => void;
  onClickValue: () => void;
  articleDelete: (key: string) => void;
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
          { articlesMode === 'CHANGING' && <th>Выбрать</th> }
          <th onClick={onClickTitle} >Заголовок</th>
          <th onClick={onClickValue} >Значение</th></tr>
      </thead>);

  }

  private getArticles(){

    const {
      articles,
      articlesMode,
      articleDelete,
    } = this.props;

    console.log('render getArticles', articles);

    return Object.keys(articles).map(key => {

      const articleClickDelete = () =>{
        articleDelete(key);
      }

      if(articles[key].isDeleted) return;

      return(
        <tr key={key} className={css.article}>
          {articlesMode === 'CHANGING' && 
            <td className={css.articleDelete}>
              <div className={css.delLabel} onClick={articleClickDelete}></div>
            </td>}
          <td className={css.artilceTitle} >{articles[key].title} {articles[key].isDeleted}</td>
          <td className={css.artilceValue}>{articles[key].value}</td>
        </tr>);

    });
    
  };

  render(){

    console.log('render ArticleList', this.props);
    
    const getArticleListHeader = this.getArticleListHeader();
    const getArticles = this.getArticles();
    
    return(<table id={css.articleList}>
            { getArticleListHeader }
            <tbody>{ getArticles }</tbody>
    </table>);

  };
};