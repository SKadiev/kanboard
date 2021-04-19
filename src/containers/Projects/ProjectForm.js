import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProject } from '../../store/actions/';

const ProjectForm = (props) => {
  const [projectValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const projects = useSelector( state => {
    return state.projectsState.projects;
  })


  const onSumbit = (event) => {
    event.preventDefault();
    dispatch(addNewProject( projectValue));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Project</Form.Label>
        <Form.Control
          value={projectValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Project name"
        />
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProjectForm;
