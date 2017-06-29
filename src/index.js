import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import Context, { createContextConfig } from './containers/Context';

// import 'semantic-ui-css/semantic.min.css';

const contextConfig = createContextConfig();

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
