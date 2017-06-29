import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const Menubar =
(
  { path, onItemClick } :
  { path: String, onItemClick: Function }
) =>
  <Menu pointing secondary>
    <Menu.Item content='Home' name='/' active={path === '/'} onClick={onItemClick} />
    <Menu.Item content='Hello' name='/hello' active={path === '/hello'} onClick={onItemClick} />
    <Menu.Menu position='right'>
      <Menu.Item
        content='Sign Up'
        name='/sign-up'
        active={path === '/sign-up'}
        onClick={onItemClick} />
    </Menu.Menu>
  </Menu>
;

export default connect(
  ({ router }) => ({ path: router.location.pathname }),
  dispatch => ({ onItemClick: (_, { name }) => dispatch(push(name)) })
)(Menubar);
