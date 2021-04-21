import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Project from './Project';
import ProjectForm from './ProjectForm';
import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';

import {
  initProjects,
} from '../../store/actions/';

const Projects = (props) => {
 
  const dispatch = useDispatch();

  const projects = useSelector((state) => {
    return state.projectsState.projects;
  });

   const statusMessage = useSelector((state) => {
     return state.projectsState.statusMessage;
   });

  useEffect(() => {
    dispatch(initProjects());
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
