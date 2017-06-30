import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Container, Row, Col } from 'react-grid-system';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { API_BASE } from '~/config';
import { screenResponse as screen, pipe } from '~/util';

const signUp =
  user =>
    fetch(`${API_BASE}/user`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user),
      },
    )
;

class SignUp extends Component {
  state = {
    loading: false,
    errors: [],
  }

  handleSubmit = user => {
    this.setState({ loading: true });

    return signUp(user)
      .then(pipe(() => this.setState({ loading: false, errors: [] })))
      .then(screen)
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
            <Segment clearing>
              <SignUpForm
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
  () => ({}),
)(SignUp);
