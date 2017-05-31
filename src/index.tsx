import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { articlesAdd } from 'reducers/entities/articles'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import reducers from 'reducers';

import App from "./components/App";

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const DefaultArticle = {
  id: '00001',
  title: 'newArticle',
  value: 900,
  isSelect: false
}

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

function toto(){

}
store.dispatch(articlesAdd(DefaultArticle))