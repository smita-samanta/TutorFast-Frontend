import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import * as _reducers from '../reducers';
import { AppContainer } from 'react-hot-loader';
import { createHistory } from 'history/createHashHistory';

const createLinkedStore = ({ history, reducers }) => {
  const reduxRouterMiddleware = routerMiddleware(history);

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(reduxRouterMiddleware),
  );

  return store;
};

export default (
  { children, history = createHistory(), reducers = _reducers } :
  { children: Element | [Element], history: Object, reducers: Object }
) =>
  <AppContainer>
    <Provider store={createLinkedStore({ history, reducers })} >
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  </AppContainer>
;
