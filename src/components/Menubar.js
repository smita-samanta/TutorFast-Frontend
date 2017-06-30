import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const Menubar =
(
  {
    path,
    user,
    onItemClick,
    onSignOut,
    onProfile,
    } : {
    path: string,
    user: {},
    onItemClick: Function,
    onSignOut: Function,
    onProfile: Function,
  }
) =>
  <Menu pointing secondary>
    <Menu.Item
      content='Home'
      name='/'
      active={path === '/'}
      onClick={onItemClick} />

    <Menu.Item
      content='Hello'
      name='/hello'
      active={path === '/hello'}
      onClick={onItemClick} />

    <Menu.Menu position='right'>
      {
        !user.token
          ? <Menu.Item
            content='Sign Up'
            name='/sign-up'
            active={path === '/sign-up'}
            onClick={onItemClick} />
          : null
      }

      {
        user.token
          ? <Menu.Item
            name={`/user/${user.email}`}
            content={user.username}
            onClick={onProfile} />
          : null
      }

      {
        user.token
          ? <Menu.Item
            content='Sign Out'
            onClick={onSignOut} />
          : null
      }
    </Menu.Menu>
  </Menu>
;

export default connect(
  ({ router, user }) => ({ path: router.location.pathname, user }),
  dispatch => ({
    onItemClick: (_, { name }) => dispatch(push(name)),
    onSignOut: () => {},
    onProfile: () => {},
  }),
)(Menubar);
