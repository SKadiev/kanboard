import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Project from './Project';
import axios from '../../axios';
import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  const [projectsOutput, setProjectsOutput] = useState(<Spinner />);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    axios
      .get('projects.json')
      .then((res) => {
        setProjects(
          res.data.split(',').map((member) => {
            return {
              name: member,
            };
          })
        );
      })
      .catch((e) => setProjectsOutput(<p>Error</p>));
  }, []);

  useEffect(() => {
    if (projects !== null) {
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
