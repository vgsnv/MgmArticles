import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'flow/reducers';

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
