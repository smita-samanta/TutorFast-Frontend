import React, { Component } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

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
      <div>
        {this.state.list.map((item, idx) =>
          <Input
            defaultValue={item}
            action={<Button icon='trash' />}
            fluid
            key={idx} />
        )}
        <Button positive animated='fade' fluid>
          <Button.Content visible>
            <Icon name='add' />
          </Button.Content>
          <Button.Content hidden>
            Add Another Subject!
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default EditableList;
