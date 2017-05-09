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

    return(<div id={css.article}>
      <p id={css.artilceTitle}>{title}</p>
      <p id={css.artilceValue}>{value}</p>
    </div>);

  };
};