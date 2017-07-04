import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { pipe } from '~/util';
import { signIn } from '~/actions';
import { createUser } from '~/fetches';

import SignUpForm from './SignUpForm';
import Layout from './LayoutCenterSmall';

class SignUp extends Component {
  state = {
    loading: false,
    errors: [],
  }

  props: {
    onSignUp: Function,
  }

  handleSubmit = user => {
    this.setState({ loading: true });

    return createUser(user)
      .then(pipe(() => this.setState({ loading: false, errors: [] })))
      .then(({ user, token }) => this.props.onSignUp(token, user))
      .catch(err => this.setState({ loading: false, errors: [err] }))
    ;
  }

  render() {
    return (
      <Layout>
        <Segment>
          <SignUpForm
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
    onSignUp: (token, user) => {
      dispatch(push('/'));
      dispatch(signIn(user, token));
    },
  }),
)(SignUp);
