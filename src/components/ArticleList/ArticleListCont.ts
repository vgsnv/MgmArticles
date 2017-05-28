import * as React from 'react';
import { connect } from 'react-redux';

import { ArticleList, Props, Dispatch } from './ArticleList';
import { articlesDelete } from 'reducers/entities/articles'

type MapStateToProps = Props;

const mapStateToProps = ({entities, articlesMode}): MapStateToProps => ({
  articles: entities.articles,
  articlesMode: entities.articlesMode,
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickTitle: () => {console.log('Order by Title')},
  onClickValue: () => {console.log('Order by Value')},
  articleDelete: (key) => {dispatch(articlesDelete(key))}
})

const ArticleListCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleListCont;