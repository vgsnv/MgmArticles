import * as React from 'react';
import * as css from './Article.styl';

import { Article as IArticle } from 'flow/model';

export interface Props extends IArticle{
  articlesMode: string;
};

export interface Dispatch{
  onSelectClick: (id: string) => void;
}

interface State{

};

export class Article extends React.Component<Props & Dispatch, State> {

  private onInputClick = (e) => {

    e.preventDefault();

    const {
      id,
      onSelectClick
    } = this.props;

    this.props.onSelectClick(id);
  }

  render(){

    console.log('Article props', this.props);

    const {
      title,
      value,
      articlesMode,
    } = this.props

    return(<tr className={css.article}>
      { articlesMode === 'DELETING' &&
      <td className={css.articleSelect}><input onClick={this.onInputClick} type="checkbox" /> </td> }
      <td className={css.artilceTitle} >{title}</td>
      <td className={css.artilceValue}>{value}</td>
    </tr>);

  };
};