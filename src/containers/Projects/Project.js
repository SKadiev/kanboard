import React from 'react';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/';

const Project = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <Button
        clicked={() => dispatch(deleteProject(props.uniqueDbId))}
        value="Delete Member"
        variant="danger"
      />
    </React.Fragment>
  );
};

export default Project;
