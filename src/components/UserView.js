import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import UserFields from './UserFields';
import Layout from './LayoutCenterSmall';

const UserView = (
  { user, onEdit } :
  { user: {}, onEdit: () => {} }
) =>
  <Layout>
    <Segment>
      <UserFields user={user} />

      <Divider />

      <Button onClick={onEdit}>Edit</Button>
    </Segment>
  </Layout>
;

export default connect(
  ({ user }) => ({
    user,
  }),
  dispatch => ({
    onEdit: () => dispatch(push('/user/edit')),
  }),
)(UserView);
