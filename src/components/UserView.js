import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { push } from 'react-router-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import Layout from './LayoutCenterSmall';
import UserFields from './UserFields';
import EditUserModal from './EditUserModal';

import { updateUser as updateUserFetch } from '~/fetches';
import { updateUser as updateUserAction } from '~/actions';


class UserView extends Component {
  state = {
    loading: false,
    errors: [],
  }

  props: {
    user: {
      token: string,
    },
    onEdit: () => {},
    onCancel: () => {},
    onSave: () => {}
  }

  handleEdit = this.props.onEdit;

  handleCancel = this.props.onCancel;

  handleSave = userUpdate => {
    this.setState({ loading: true });

    console.log(userUpdate);

    this.props.onSave(userUpdate, this.props.user.token)
      .catch(err => this.setState({ errors: [err] }))
      .then(() => this.setState({ loading: false }))
    ;
  }

  render() {
    return (
      <Layout>
        <Segment>
          <UserFields user={this.props.user} />

          <Divider />

          <Button fluid onClick={this.handleEdit}>Edit</Button>

          <Route
            path='/user/edit'
            render={
              () =>
                <EditUserModal
                  errors={this.state.errors}
                  loading={this.state.loading}
                  user={this.props.user}
                  onSave={this.handleSave}
                  onCancel={this.handleCancel} />
            } />

        </Segment>
      </Layout>
    );
  }
}

export default connect(
  ({ user }) => ({
    user,
  }),
  dispatch => ({
    onEdit: () => dispatch(push('/user/edit')),
    onCancel: () => dispatch(push('/user')),
    onSave: (userUpdate, token) =>
      updateUserFetch({ token, ...userUpdate })
        .then(({ user }) => dispatch(updateUserAction(user)))
        .then(() => dispatch(push('/user'))),
  }),
)(UserView);
