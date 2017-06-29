import React from 'react';
import { Form } from 'semantic-ui-react';

const SignUpForm =
(
  // { style } :
  // { style: Object }
) =>
  <Form>
    <Form.Input label='Email' placeholder='your@email.com' />
    <Form.Input label='Username' placeholder='Super Tutor' />
    <Form.Input label='Password' type='password' />
  </Form>
;

export default SignUpForm;
