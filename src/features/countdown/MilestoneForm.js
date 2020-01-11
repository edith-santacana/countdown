import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class MilestoneForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Milestone Title</label>
            <input placeholder='Enter the Milestone title' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder='Enter a description' />
          </Form.Field>
          <Form.Field>
            <label>Time</label>
            <input type='date' placeholder='Enter the Milestone date' />
          </Form.Field>
          <Form.Field>
            <label>Project</label>
            <input placeholder='Enter the name of the project' />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default MilestoneForm;
