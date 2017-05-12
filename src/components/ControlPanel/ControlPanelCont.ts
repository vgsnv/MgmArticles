import * as React from 'react';
import { connect } from 'react-redux';

import { ControlPanel, Props, Dispatch } from './ControlPanel';

import { articleModeAdding, articleModeChanging, articleModeCanceling } from 'flow/articlesMode';

type MapStateToProps = Props;

const mapStateToProps = ({articlesMode}): MapStateToProps => ({
  articlesMode
})

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickAdd: () => dispatch(articleModeAdding()),
  onClickChange: () => dispatch(articleModeChanging()),
  onClickCancel: () => dispatch(articleModeCanceling()),
  
})

const ControlPanelCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelCont;