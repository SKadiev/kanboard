import Project from './Project';
import ProjectForm from './ProjectForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';
import { RootState } from '../..';

import { initProjects } from '../../store/actions';
import { useActions } from '../../hooks/useActions';

const Projects = (props) => {
  const { initProjects } = useActions();
  const projects = useSelector((state: RootState) => {
    return state.projectsState.projects;
  });

  const statusMessage = useSelector((state: RootState) => {
    return state.projectsState.statusMessage;
  });

  useEffect(() => {
    initProjects();
  }, [initProjects]);

  let projectsOutput = useLayoutComponentGenerator(
    Project,
    ProjectForm,
    projects,
    statusMessage
  );

  return projectsOutput;
};

export default Projects;
