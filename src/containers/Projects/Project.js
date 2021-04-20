import React from 'react';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/';
import { Card } from 'react-bootstrap';


const Project = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {/* <strong>Member role : {props.role.toUpperCase()}</strong> */}
          </Card.Text>
          <Button variant="primary" value="Open Project info" />
          <Button
            clicked={() => dispatch(deleteProject(props.uniqueDbId))}
            value="Delete Project"
            variant="danger"
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Project;
