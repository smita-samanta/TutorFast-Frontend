import React, { Component } from 'react';
import { Form, Message, Modal, Button } from 'semantic-ui-react';
import { validate as validateEmail } from 'email-validator';

import { validateZipCode } from '~/util';


class EditUserForm extends Component {
  static defaultProps = {
    onSave: () => {},
    onCancel: () => {},
    success: '',
    loading: false,
    errors: [],
    fieldErrors: {},
  }

  state = {
    email: '',
    username: '',
    password: '',
    isTutor: false,
    subjects: [],
    zipCode: '',
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
      isTutor: boolean,
      subjects: Array<string>,
      zipCode: number,
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
      zipCode: boolean,
      isTutor: boolean,
    }
  }

  handleChange = (e, { name, value, checked }) =>
    this.setState({ [name]: value || checked })

  handleCancel = this.props.onCancel

  handleSave = () => {
    const errors = Object.entries(this.computeFieldValidity())
      .filter(([_, validity]) => !validity)
      .map(([field]) => field)
      .map(field => `The ${field} field is not valid.`)
    ;

    this.setState({ errors: [...errors] });

    // if there are errors dont submit
    if (errors.length) return;

    this.props.onSave([
      'username',
      'email',
      'password',
      'isTutor',
      'zipCode',
      'subjects',
    ].reduce(
      (u, field) =>
        this.state[field]
          ? { ...u, [field]: this.state[field] }
          : u,
      {},
    ));
  }

  computeFieldValidity = () => ({
    username: true,
    email: !this.state.email || validateEmail(this.state.email),
    password: true,
    isTutor: true,
    zipCode: !this.state.zipCode || validateZipCode(this.state.zipCode),
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
    isTutor:
      !this.computeFieldValidity().password ||
      this.props.fieldErrors.isTutor,
    zipCode:
      !this.computeFieldValidity().zipCode ||
      this.props.fieldErrors.zipCode,
  })

  render() {
    const { errors, success } = this.state;
    const fieldErrors = this.computeFieldErrors();

    return (
      <Modal open dimmer='blurring' size='small' onClose={this.handleCancel}>
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

            <Form.Checkbox
              name='isTutor'
              label='Tutor'
              error={fieldErrors.isTutor}
              onChange={this.handleChange} />

            <Form.Input
              name='zipCode'
              label='ZIP Code'
              disabled={!this.state.isTutor}
              error={fieldErrors.zipCode}
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

