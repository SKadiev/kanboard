import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNewProject } from '../../store/actions';

const ProjectForm = (props) => {
  const [projectNameValue, setProjectNameValue] = useState('');

  const dispatch = useDispatch();

  const onSumbit = (event) => {
    event.preventDefault();
    dispatch(addNewProject(projectNameValue));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Project</Form.Label>
        <Form.Control
          value={projectNameValue}
          onChange={(e) => {
            setProjectNameValue(e.target.value);
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
