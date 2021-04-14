import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Member from './Member';
import axios from '../../axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-spinners-css';

const Members = (props) => {
  const [members, setMembers] = useState(null);
  const [membersOutput, setMembersOutput] = useState(<Spinner color="blue" />);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    axios
      .get('members.json')
      .then((res) => {
        setMembers(
          res.data.split(',').map((member) => {
            return {
              name: member,
            };
          })
        );
      })
      .catch((e) => setMembersOutput(<p>Error</p>));
  }, []);

  useEffect(() => {
    if (members !== null) {
      setMembersOutput(
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
    }
  }, [members, modalShow]);

  return membersOutput;
};

export default Members;
