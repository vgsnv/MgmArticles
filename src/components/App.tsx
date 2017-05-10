import * as React from "react";
import ControlPanelCont from 'components/ControlPanel/ControlPanelCont';
import {SummaryPanel} from 'components/SummaryPanel/SummaryPanel';
import ArticleListCont from 'components/ArticleList/ArticleListCont';

class App extends React.Component<{}, {}> {

  render(){

    const controlPanel = {
      onClickAdd:()=>{console.log('Нажата кнопка добавить')},
      onClickDel:()=>{console.log('Нажата кнопка Удалить')}
    }

    const summary = {
      summary: 550
    }

    return(<main>
      <ControlPanelCont/>
      <SummaryPanel {...summary}/>
      <ArticleListCont/>
    </main>);
  }

}

export default App;