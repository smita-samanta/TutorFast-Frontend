import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

export default (
  { children } :
  { children: Array<{}> | {} }
) =>
  <Container fluid>
    <Row>
      <Col
        md={6} lg={4}
        offset={{ md: 3, lg: 4 }}>
        {children}
      </Col>
    </Row>
  </Container>
;
