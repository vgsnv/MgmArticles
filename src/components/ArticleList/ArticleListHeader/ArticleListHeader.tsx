import * as React from 'react';
import * as css from './ArticleListHeader.styl';

interface Props{
  onClickHeadTitle: () => void;
  onClickHeadValue: () => void;
};

interface State{

};

export class ArticleListHeader extends React.Component<Props, State> {

  render(){

    console.log('ArticleListHeader props', this.props);

    const {
      onClickHeadTitle,
      onClickHeadValue
    } = this.props

    return(<thead id={css.articleListHeader}>
      <tr><th onClick={onClickHeadTitle} >Title</th><th onClick={onClickHeadValue} >Value</th></tr>
    </thead>);

  };
};