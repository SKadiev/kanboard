import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import LayoutComponentGenerator from '../../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import Member from './Member';
import MemberForm from './MemberForm';
import { useState, useEffect } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMembers,
  initMembers,
  fetchMembersFailed,
  fetchMembersFinished,
} from '../../store/actions/';

const Members = (props) => {
  const [membersOutput, setMembersOutput] = useState(<Spinner />);
    const [addModalShow, setAddModalShow] = React.useState(false);

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
            clicked={() => setAddModalShow(true)}
            value="Add Member"
          />
          {ReactDOM.createPortal(
            <Modal
              title="Members"
              show={addModalShow}
              onHide={() => setAddModalShow(false)}
            >
              <MemberForm />
            </Modal>,
            document.getElementById('modal-content')
          )}
          {LayoutComponentGenerator(Member, members)()}
        </React.Fragment>
      );
      dispatch(fetchMembersFinished());
    }
  }, [members, addModalShow]);

  // useEffect(() => {
  //   if (loaded) {
  //     welcomeMessage = (
  //       <h1>
  //         <strong>WELCOME TO MEMBERS</strong>
  //       </h1>
  //     );
  //     setTimeout(() => {
  //       setMembersOutput(
  //         [welcomeMessage, membersOutput].map((el, index) => {
  //           return React.cloneElement(el, { key: index });
  //         })
  //       );
  //     }, 1000);
  //   }
  // }, [loaded]);

  return membersOutput;
};

export default Members;
