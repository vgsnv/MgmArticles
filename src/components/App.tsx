import * as React from "react";
import {ControlPanel} from 'components/ControlPanel/ControlPanel';
import {SummaryPanel} from 'components/SummaryPanel/SummaryPanel';
import {ArticleList} from 'components/ArticleList/ArticleList';

class App extends React.Component<{}, {}> {

  render(){

    const controlPanel = {
      onClickAdd:()=>{console.log('Нажата кнопка добавить')},
      onClickDel:()=>{console.log('Нажата кнопка Удалить')}
    }

    const summary = {
      summary: 550
    }

    const articles = [{
      id: '19df4', title: 'Макароны', value: 130
    }, {
      id: '19df3', title: 'Сосиски', value: 240
    }]

    return(<div>
      <ControlPanel {...controlPanel}/>
      <SummaryPanel {...summary}/>
      <ArticleList articles = {articles}/>
    </div>);
  }

}

export default App;