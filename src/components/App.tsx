import * as React from "react";
import ControlPanelCont from 'components/ControlPanel/ControlPanelCont';
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
    }];

    const articlesList = {
      articles: articles,
      onClickTitle: () => {console.log('Order by Title')},
      onClickValue: () => {console.log('Order by Value')},
    }

    return(<main>
      <ControlPanelCont/>
      <SummaryPanel {...summary}/>
      <ArticleList {...articlesList}/>
    </main>);
  }

}

export default App;