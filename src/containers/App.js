import React from 'react';
import HelloWorld from '../components/HelloWorld';
import { Switch, Route } from 'react-router';
import Menubar from '../components/Menubar';

export default () =>
  <div>
    <Menubar />
    <Switch>
      <Route exact path='/' component={HelloWorld}/>
      <Route path='/sign-up' component={() => <h1> sign-up </h1>} />
    </Switch>
  </div>
;
