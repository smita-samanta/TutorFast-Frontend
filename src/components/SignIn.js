import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Segment } from 'semantic-ui-react';

import { pipe } from '~/util';
import { signIn } from '~/actions';
import { createSession, getOwnUser } from '~/fetches';

import SignInForm from './SignInForm';
import Layout from './LayoutCenterSmall';

class SignIn extends Component {
  state = {
    loading: false,
    errors: [],
  }

  props: {
    onSignIn: Function,
  }

  handleSubmit = user => {
    this.setState({ loading: true });

    return createSession(user)
      .then(pipe(() => this.setState({ loading: false, errors: [] })))
      .then(({ token }) => getOwnUser(token))
      .then(user => this.props.onSignIn(user))
      .catch(err => this.setState({ loading: false, errors: [err] }))
    ;
  }

  render() {
    return (
      <Layout>
        <Segment>
          <SignInForm
            onSubmit={this.handleSubmit}
            {...this.state} />
        </Segment>
      </Layout>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    onSignIn: user => {
      dispatch(push('/'));
      dispatch(signIn(user));
    },
  }),
)(SignIn);
