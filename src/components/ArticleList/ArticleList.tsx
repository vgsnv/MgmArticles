import * as React from 'react';
import * as css from './ArticleList.styl';
import { Articles } from 'reducers/entities/articles';
import SelectItem from 'components/General/SelectItem/SelectItem';

export interface Props{
  articles: Articles;
  articlesMode: string;
};

export interface Dispatch{
  onClickTitle: () => void;
  onClickValue: () => void;
  articlesSelect: (key: string) => void;
};

interface State{

};

export class ArticleList extends React.Component<Props & Dispatch, State> {

  private getArticleListHeader(){

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
      articlesSelect,
    } = this.props;

    return Object.keys(articles).map(key => {

      const selectItemClick = () =>{
        console.log('click')
        articlesSelect(key);
      }

      return(
        <tr key={key} className={css.article}>
          {articlesMode === 'CHANGING' && 
            <td className={css.articleDelete}>

              <SelectItem  selectStatus = {articles[key].isSelect} onClick = { selectItemClick }/>
            </td>}
          <td className={css.artilceTitle} >{articles[key].title} {articles[key].isSelect}</td>
          <td className={css.artilceValue}>{articles[key].value}</td>
        </tr>);

    });
    
  };

  render(){
    
    const getArticleListHeader = this.getArticleListHeader();
    const getArticles = this.getArticles();
    
    return(<table id={css.articleList}>
            { getArticleListHeader }
            <tbody>{ getArticles }</tbody>
    </table>);

  };
};