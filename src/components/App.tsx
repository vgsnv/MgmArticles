import * as React from "react";
import {ControlPanel} from 'components/ControlPanel/ControlPanel';
import {SummaryPanel} from 'components/SummaryPanel/SummaryPanel';

class App extends React.Component<{}, {}> {

  render(){

    const controlPanel = {
      onClickAdd:()=>{console.log('Нажата кнопка добавить')},
      onClickDel:()=>{console.log('Нажата кнопка Удалить')}
    }

    const summary = {
      summary: 550
    }

    return(<div>
      <ControlPanel {...controlPanel}/>
      <SummaryPanel {...summary}/>
    </div>);
  }

}

export default App;