import React from 'react';
import { Switch, Route } from 'react-router';

import HelloWorld from '~/components/HelloWorld';
import Menubar from '~/components/Menubar';
import SignUp from '~/components/SignUp';
import SignIn from '~/components/SignIn';
import UserView from '~/components/UserView';
import NoMatch from '~/components/NoMatch';

import PrivateRoute from './PrivateRoute';


export default () =>
  <div>
    <Menubar />
    <Switch>
      <Route exact path='/' component={HelloWorld} />
      <Route path='/hello' component={HelloWorld} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      <PrivateRoute path='/user' component={UserView} />
      <Route component={NoMatch}/>
    </Switch>
  </div>
;
