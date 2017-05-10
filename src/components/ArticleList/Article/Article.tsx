import * as React from 'react';
import * as css from './Article.styl';

import { Article as IArticle } from 'flow/model';

interface Props extends IArticle{

};

interface State{

};

export class Article extends React.Component<Props, State> {

  render(){

    console.log('Article props', this.props);

    const {
      title,
      value
    } = this.props

    return(<tr className={css.article}>
      <td className={css.artilceTitle} >{title}</td><td className={css.artilceValue}>{value}</td>
    </tr>);

  };
};