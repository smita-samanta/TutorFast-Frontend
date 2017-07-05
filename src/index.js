import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import Context, { createContextConfig } from './containers/Context';

let contextConfig;

try {
  contextConfig = createContextConfig({
    initialState: {
      user: JSON.parse(localStorage.getItem('user')) || {},
    },
  });
} catch (err) {
  contextConfig = createContextConfig();
}

const render = Component =>
  ReactDOM.render(
    <Context {...contextConfig}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Context>,
    document.getElementById('app')
  )
;

render(App);

if (module.hot)
  module.hot.accept('./containers/App', () => render(App));
