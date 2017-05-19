import * as React from 'react';
import { connect } from 'react-redux';

import { ArticleList, Props, Dispatch } from './ArticleList';

type MapStateToProps = Props;

const mapStateToProps = ({articles, articlesMode}): MapStateToProps => ({
  articles,
  articlesMode,
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickTitle: () => {console.log('Order by Title')},
  onClickValue: () => {console.log('Order by Value')},
  onSelectClick: (id) => {console.log('dispatch select '+ id)},
})

const ArticleListCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleListCont;