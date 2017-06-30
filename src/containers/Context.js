import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import * as _reducers from '../reducers';
import createHistory from 'history/createHashHistory';

// Creates an object that is spreak into the Context component.
// defaults to empty HashHistory and using this projects reducers.
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

// A component that captures all the context providing
// HOCs.  This can be used in testing to provide simulated
// context in one convenient place.
export default (
  { children, store, history } :
  { children: {}, store: {}, history: {} }
) =>
  <Provider store={store} >
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
;
