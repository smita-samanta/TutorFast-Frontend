import React from 'react';
import SignUpForm from './SignUpForm';
import { Container, Row, Col } from 'react-grid-system';

const SignUp =
() =>
  <Container fluid>
    <Row>
      <Col
        md={6} lg={4}
        offset={{ md: 3, lg: 4 }}>
        <SignUpForm
          onSubmit={console.log} />
      </Col>
    </Row>
  </Container>
;

export default SignUp;
