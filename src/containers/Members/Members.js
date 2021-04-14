import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import Member from './Member';

const members = [{ name: 'dzole' }, { name: 'koce' }, { name: 'koceee' }];
const Members = (props) => {
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
      {LayoutComponentGenerator(Member, members)()}
    </React.Fragment>
  );
};

export default Members;
