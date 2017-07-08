import React, { Component } from 'react';
import { Input, Button, List } from 'semantic-ui-react';

class EditableList extends Component {
  defaultProps = {
    onChange: () => {},
  }

  state = {
    list: [...this.props.list],
  }

  props: {
    list: Array<string>,
    onChange: ?(list: Array<string>) => {},
  }

  render() {
    return (
      <List size='huge' celled relaxed selection>
        {this.state.list.map((item, idx) =>
          <List.Item key={idx}>
            <List.Content floated='right'>
              <Button icon='trash' />
              <Button positive icon='edit' />
            </List.Content>

            <List.Content>
              {item}
            </List.Content>
          </List.Item>
        )}
      </List>
    );
  }
}

export default EditableList;
