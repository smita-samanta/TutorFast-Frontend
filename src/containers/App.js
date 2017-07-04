import React from 'react';
import { Switch, Route } from 'react-router';

import HelloWorld from '~/components/HelloWorld';
import Menubar from '~/components/Menubar';
import SignUp from '~/components/SignUp';
import SignIn from '~/components/SignIn';
import UserView from '~/components/UserView';


export default () =>
  <div>
    <Menubar />
    <Switch>
      <Route exact path='/' component={HelloWorld} />
      <Route path='/hello' component={HelloWorld} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/user' component={UserView} />
    </Switch>
  </div>
;
