import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { articlesSelect, articlesAdd } from 'reducers/entities/articles'

import reducers from 'reducers';

import App from "./components/App";

const store = createStore(reducers);

store.subscribe(( ) => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store.dispatch(articlesSelect('19df3'));

// store.dispatch(articlesSelect('19df5'));
// store.dispatch(articlesAdd({ id: '19df6', title: 'Доширак', value: 20, isSelected: false, isDeleted: false },));
