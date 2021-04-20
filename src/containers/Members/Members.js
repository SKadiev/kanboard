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

   const statusMessage = useSelector((state) => {
     return state.membersState.statusMessage;
   });
   
  useEffect(() => {
    dispatch(initMembers());
  }, []);

  useEffect(() => {
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

        {members.length !== 0 ? (
          LayoutComponentGenerator(Member, members)()
        ) : (
          <h1>{statusMessage}</h1>
        )}
      </React.Fragment>
    );
    dispatch(fetchMembersFinished());
  }, [members, addModalShow, statusMessage]);

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

  console.log(membersOutput)
  return membersOutput;
};

export default Members;
