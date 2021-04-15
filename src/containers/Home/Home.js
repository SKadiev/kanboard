import ReactDOM from 'react-dom';
import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

const Home = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <h1>Home</h1>
      <Button
        variant="primary"
        clicked={() => setModalShow(true)}
        value="Open modal"
      />
      {ReactDOM.createPortal(
        <Modal title="Home" show={modalShow} onHide={() => setModalShow(false)}>
          Home
        </Modal>,
        document.getElementById('modal-content')
      )}
    </React.Fragment>
  );
};

export default Home;
