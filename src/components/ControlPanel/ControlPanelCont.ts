import * as React from 'react';
import { connect } from 'react-redux';

import { ControlPanel, Props, Dispatch } from './ControlPanel';

import { articleModeAdding, articleModeDeleting } from 'flow/articlesMode';

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({
})

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps =>({
  onClickAdd: () => dispatch(articleModeAdding()),
  onClickDel: () => dispatch(articleModeDeleting()),
})

const ControlPanelCont = connect<MapStateToProps, MapDispatchToProps, {} >(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelCont;