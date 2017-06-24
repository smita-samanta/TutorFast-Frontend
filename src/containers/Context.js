import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import * as _reducers from '../reducers';
import createHistory from 'history/createHashHistory';

export const createContextConfig = (
  { history = createHistory(), reducers = _reducers } :
  { history: Object, reducers: Object } = {}
) => (
  {
    store: createStore(
      combineReducers({
        ...reducers,
        router: routerReducer,
      }),
      applyMiddleware(routerMiddleware(history)),
    ),
    history,
  }
);

export default (
  { children, store, history } :
  { children: Element | [Element], store: Object, history: Object }
) =>
  <Provider store={store} >
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
;
