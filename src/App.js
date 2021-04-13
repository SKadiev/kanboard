import logo from './logo.svg';
import './App.css';
import Button from './components/UI/Button/Button';
import Modal from './components/UI/Modal/Modal';
import Navigation from './components/Navigation/Navigation';

import React from 'react';
import ReactDOM from 'react-dom';

// show props and onHile
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const [navigationItems, setNavigationItems] = React.useState([
    { title: 'projects', href: '/projects' },
    { title: 'members', href: '/members' },
  ]);

  return (
    <React.Fragment>
      <Navigation navTitle="Kanboard" navItems={navigationItems}></Navigation>
      <Button
        value="Click"
        clicked={() => {
          alert('Hello World');
        }}
      />

      <Button
        variant="primary"
        clicked={() => setModalShow(true)}
        value="Open modal"
      />

      {ReactDOM.createPortal(
        <Modal
          title="totkite"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          Tote
        </Modal>,
        document.getElementById('modal-content')
      )}
    </React.Fragment>
  );
}

export default App;
