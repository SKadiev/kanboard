import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ProjectForm = (props) => {
  const onSumbit = (event) => {
    event.preventDefault();
    // props.clickHandler();
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Project</Form.Label>
        <Form.Control type="text" placeholder="Project name" />
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProjectForm;
