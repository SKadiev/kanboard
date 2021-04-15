import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Project from './Project';
import axios from '../../axios';
import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';

import {
  setProjects,
  initProjects,
  fetchProjectsFailed,
} from '../../store/actions/';

const Projects = (props) => {
  const [projectsOutput, setProjectsOutput] = useState(<Spinner />);
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => {
    return state.projectsState.projects;
  });

  useEffect(() => {
    dispatch(initProjects());
  }, []);

  useEffect(() => {
    if (projects.length !== 0) {
      setProjectsOutput(
        <React.Fragment>
          <Button
            variant="primary"
            clicked={() => setModalShow(true)}
            value="Open modal"
          />
          {ReactDOM.createPortal(
            <Modal
              title="Projects"
              show={modalShow}
              onHide={() => setModalShow(false)}
            >
              Projects
            </Modal>,
            document.getElementById('modal-content')
          )}
          {LayoutComponentGenerator(Project, projects)()}
        </React.Fragment>
      );
    }
  }, [projects, modalShow]);

  return projectsOutput;
};

export default Projects;
