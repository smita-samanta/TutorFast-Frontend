import React, { Component } from 'react';
import { Form, Message, Modal, Button } from 'semantic-ui-react';
import { validate } from 'email-validator';

class EditUserForm extends Component {
  static defaultProps = {
    onSave: () => {},
    onCancel: () => {},
    success: '',
    loading: false,
    errors: [],
    fieldErrors: {
      email: false,
      username: false,
      password: false,
    },
  }

  state = {
    email: {
      pristine: true,
      value: '',
    },
    username: {
      pristine: true,
      value: '',
    },
    password: {
      pristine: true,
      value: '',
    },
    success: this.props.success,
    errors: [...this.props.errors],
  }

  componentWillReceiveProps({ success, errors }) {
    this.setState({
      success,
      errors: [...errors],
    });
  }

  props: {
    user: {
      email: string,
      username: string,
    },
    onSave: Function,
    onCancel: Function,
    success: string,
    errors: Array<string>,
    loading: boolean,
    fieldErrors: {
      email: boolean,
      username: boolean,
      password: boolean,
    }
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: { value, pristine: false } })

  handleCancel = this.props.onCancel

  handleSave = () => {
    const errors = Object.entries(this.computeFieldValidity())
      .filter(([_, validity]) => !validity)
      .map(([field]) => field)
      .map(field => `The ${field} field is not valid.`)
    ;

    this.setState({
      errors: [...errors],
      username: { ...this.state.username, pristine: false },
      password: { ...this.state.password, pristine: false },
      email: { ...this.state.email, pristine: false },
    });

    // if there are errors dont submit
    if (errors.length) return;

    this.props.onSave([
      'username',
      'email',
      'password',
    ].reduce(
      (u, field) =>
        this.state[field].value
          ? { ...u, [field]: this.state[field].value }
          : u,
      {},
    ));
  }

  computeFieldValidity = () => ({
    username: true,
    email: !this.state.email.value || validate(this.state.email.value),
    password: true,
  })

  computeFieldErrors = () => ({
    username:
      !this.computeFieldValidity().username ||
      this.props.fieldErrors.username,
    email:
      !this.computeFieldValidity().email ||
      this.props.fieldErrors.email,
    password:
      !this.computeFieldValidity().password ||
      this.props.fieldErrors.password,
  })

  render() {
    const { errors, success } = this.state;
    const fieldErrors = this.computeFieldErrors();

    return (
      <Modal open dimmer='blurring' size='small'>
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={this.handleSubmit}
            success={Boolean(success)}
            error={Boolean(errors.length)}
            loading={this.props.loading} >

            <Form.Input
              name='email'
              label='Email'
              placeholder={this.props.user.email}
              error={fieldErrors.email}
              onChange={this.handleChange} />

            <Form.Input
              name='username'
              label='Username'
              placeholder={this.props.user.username}
              error={fieldErrors.username}
              onChange={this.handleChange} />

            <Form.Input
              name='password'
              label='Password'
              type='password'
              error={fieldErrors.password}
              onChange={this.handleChange} />

            <Message
              success
              content={success} />

            {errors.map((error, idx) =>
              <Message
                key={idx}
                error
                content={error || 'Error'} />
            )}
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button positive onClick={this.handleSave}>Save</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditUserForm;
