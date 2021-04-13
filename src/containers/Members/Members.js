import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import ReactDOM from 'react-dom';
const Projects = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <h1>Members</h1>
      <Button
        variant="primary"
        clicked={() => setModalShow(true)}
        value="Open modal"
      />
      {ReactDOM.createPortal(
        <Modal
          title="Members"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          Members
        </Modal>,
        document.getElementById('modal-content')
      )}
    </React.Fragment>
  );
};

export default Projects;
