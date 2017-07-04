import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';

export default
(
  { user } :
  { user: {} }
) =>
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='user' circular />
      <Header.Content>
        Friends
      </Header.Content>
    </Header>

    <List divided relaxed='very'>
      <List.Item>
        <List.Icon name='vcard' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{user.username}</List.Header>
          <List.Description as='a'>Your secret codename 😎.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='mail' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{user.email}</List.Header>
          <List.Description as='a'>An email where you can be reached.</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
;
