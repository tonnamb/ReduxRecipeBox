import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { persistStore, autoRehydrate } from 'redux-persist'

import reducers from './reducers';
import routes from './routes';

const store = createStore(
	reducers,
	undefined,
	autoRehydrate()
);

persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
