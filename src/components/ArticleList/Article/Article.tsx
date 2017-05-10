import * as React from 'react';
import * as css from './Article.styl';

interface Props{
  id: string;
  title: string;
  value: number;
};

interface State{

};

export class ArticleBox extends React.Component<Props, State> {

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