import * as React from 'react';
import { connect } from 'react-redux';
import * as css from './ControlPanel.styl';
import Button from 'components/General/Button/Button';

export class ControlPanel extends React.Component<any, any>{

  render(){

    const addBtn = {
      title: 'Добавить',
      onClick: ()=>{console.log('Нажата кнопка добавить')}
    };

    const delBtn = {
      title: 'Удалить',
      onClick: ()=>{console.log('Нажата кнопка Удалить')}
    };

    return(<div className={css.controlPanel}>
      <Button {...addBtn}/>
      <Button {...delBtn}/>
    </div>);
  }
};