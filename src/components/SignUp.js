import React from 'react';
import SignUpForm from './SignUpForm';
import { Container, Row, Col } from 'react-grid-system';

const SignUp =
() =>
  <Container>
    <Row>
      <Col
        md={8} lg={6} xl={4}
        offset={{ md: 2, lg: 3, xl: 4 }}>
        <SignUpForm />
      </Col>
    </Row>
  </Container>
;

export default SignUp;
