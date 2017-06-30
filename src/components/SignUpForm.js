import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { validate } from 'email-validator';

class SignUpForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
    success: '',
    error: {
      message: '',
      email: false,
      password: false,
      username: false,
    },
  }

  state = {
    email: '',
    username: '',
    password: '',
  }

  props: {
    onSubmit: Function,
    success: string,
    error: {
      message: string | boolean,
      email: boolean,
      password: boolean,
      username: boolean,
    },
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value })

  render() {
    const { email } = this.state;
    const { error, success } = this.props;

    return (
      <Form
        onSubmit={this.props.onSubmit}
        success={Boolean(success)}
        error={Boolean(error.message)} >

        <Message
          success
          header='Success'
          content={success} />

        <Message
          error
          header='Error'
          content={error.message} />

        <Form.Input
          name='email'
          label='Email'
          placeholder='your@email.com'
          error={email && !validate(email) || error.email}
          onChange={this.handleChange} />

        <Form.Input
          name='username'
          label='Username'
          placeholder='Super Tutor'
          error={error.username}
          onChange={this.handleChange} />

        <Form.Input
          name='password'
          label='Password'
          type='password'
          error={error.password}
          onChange={this.handleChange} />
        <Form.Button content='Sign Up!' />
      </Form>
    );
  }
}

export default SignUpForm;
