import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Project from './Project';

const project = [
  { name: 'Alo belanacc' },
  { name: 'Ne bidi 5 dena na kamsss be sinee' },
  { name: 'dasdasdas' },
  { name: 'dasdasdas' },
];
const Projects = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="primary"
        clicked={() => setModalShow(true)}
        value="Open modal"
      />
      {ReactDOM.createPortal(
        <Modal
          title="Memebers"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          Members
        </Modal>,
        document.getElementById('modal-content')
      )}
      {LayoutComponentGenerator(Project, project)()}
    </React.Fragment>
  );
};

export default Projects;
