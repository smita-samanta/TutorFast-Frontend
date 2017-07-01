import React, { Component } from 'react';
import SignInForm from './SignInForm';
import { Container, Row, Col } from 'react-grid-system';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { pipe } from '~/util';
import { push } from 'react-router-redux';
import { signIn } from '~/actions';
import { createSession, getOwnUser } from '~/fetches';

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
      <Container fluid>
        <Row>
          <Col
            md={6} lg={4}
            offset={{ md: 3, lg: 4 }}>
            <Segment>
              <SignInForm
                onSubmit={this.handleSubmit}
                {...this.state} />
            </Segment>
          </Col>
        </Row>
      </Container>
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
