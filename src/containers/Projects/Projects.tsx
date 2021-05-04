import Project from './Project';
import ProjectForm from './ProjectForm';
import { useEffect } from 'react';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Projects = (props) => {
  const { initProjects } = useActions();
  const projects = useTypedSelector((state) => {
    return state.projectsState.projects;
  });

  const statusMessage = useTypedSelector((state) => {
    return state.projectsState.statusMessage;
  });

  useEffect(() => {
    initProjects();
  }, []);

  let projectsOutput = useLayoutComponentGenerator(
    Project,
    ProjectForm,
    projects,
    statusMessage
  );

  return projectsOutput;
};

export default Projects;
