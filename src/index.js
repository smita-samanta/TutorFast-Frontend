import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const App = <h1> Hello World! </h1>;

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
;

render(App);

if (module.hot)
  module.hot.accept('./containers/App', () => render(App));
