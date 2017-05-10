import * as React from 'react';
import * as css from './ArticleListHeader.styl';
import { ArticlesMode } from 'flow/model';

export interface Props{
  articlesMode: string
}

export interface Dispatch{
  onClickHeadTitle: () => void;
  onClickHeadValue: () => void;
}

interface State{

};

export class ArticleListHeader extends React.Component<Props & Dispatch, State> {

  render(){

    console.log('ArticleListHeader props', this.props);

    const {
      articlesMode,
      onClickHeadTitle,
      onClickHeadValue
    } = this.props

    return(<thead id={css.articleListHeader}>
      <tr>
        { articlesMode === 'DELETING' &&
        <th>Select</th> }
        <th onClick={onClickHeadTitle} >Title</th>
        <th onClick={onClickHeadValue} >Value</th></tr>
    </thead>);

  };
};