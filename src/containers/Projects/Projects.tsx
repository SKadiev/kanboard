import Project from './Project';
import ProjectForm from './ProjectForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';
import { RootState } from '../..';

import { initProjects } from '../../store/actions';

const Projects = (props) => {
  const dispatch = useDispatch();

  const projects = useSelector((state: RootState) => {
    return state.projectsState.projects;
  });

  const statusMessage = useSelector((state: RootState) => {
    return state.projectsState.statusMessage;
  });

  useEffect(() => {
    dispatch(initProjects());
  }, [dispatch]);

  let projectsOutput = useLayoutComponentGenerator(
    Project,
    ProjectForm,
    projects,
    statusMessage
  );

  return projectsOutput;
};

export default Projects;