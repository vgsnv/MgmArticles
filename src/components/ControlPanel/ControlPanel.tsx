import * as React from 'react';
import { connect } from 'react-redux';
import * as css from './ControlPanel.styl';
import Button from 'components/General/Button/Button';

export interface Props {

}

export interface Dispatch {
  onClickAdd: () => void;
  onClickDel: () => void;
}

export class ControlPanel extends React.Component<Props & Dispatch, any>{

  render(){

    console.log('ControlPanel props', this.props);

    const {
      onClickAdd,
      onClickDel
    } = this.props;

    const addBtn = {
      title: 'Добавить',
      onClick: onClickAdd
    };

    const delBtn = {
      title: 'Удалить',
      onClick: onClickDel
    };

    return(<div className={css.controlPanel}>
      <Button {...addBtn}/>
      <Button {...delBtn}/>
    </div>);
  }
};