import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';


const PrivateRoute = (
  { component: Component, ...rest, user } :
  { component: any, rest: ?Array<any>, user: { token: ?string } }
) =>
  <Route
    {...rest}
    render={
      (props: { location: {} }) =>
        user.token
          ? <Component {...props}/>
          : <Redirect to={{
            pathname: '/sign-up',
            state: { from: props.location },
          }}/>

    }/>
;

export default connect(
  ({ user }) => ({ user }),
)(PrivateRoute);
