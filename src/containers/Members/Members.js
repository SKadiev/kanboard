import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Member from './Member';
import axios from '../../axios';
import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMembers,
  initMembers,
  fetchMembersFailed,
} from '../../store/actions/';
const Members = (props) => {
  const [membersOutput, setMembersOutput] = useState(<Spinner />);
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const members = useSelector((state) => {
    return state.membersState.members;
  });

  useEffect(() => {
    dispatch(initMembers());
  }, []);

  useEffect(() => {
    if (members.length !== 0) {
      setMembersOutput(
        <React.Fragment>
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
          {LayoutComponentGenerator(Member, members)()}
        </React.Fragment>
      );
    }
  }, [members, modalShow]);

  return membersOutput;
};

export default Members;
