import React from 'react';
import HelloWorld from '../components/HelloWorld';
import { Switch, Route } from 'react-router';
import Menubar from '../components/Menubar';
import SignUp from '../components/SignUp';

export default () =>
  <div>
    <Menubar />
    <Switch>
      <Route exact path='/' component={HelloWorld} />
      <Route path='/hello' component={HelloWorld} />
      <Route path='/sign-up' component={SignUp} />
    </Switch>
  </div>
;
