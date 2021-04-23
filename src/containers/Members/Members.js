
import Member from './Member';
import MemberForm from './MemberForm';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initMembers,
} from '../../store/actions/';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';

const Members = (props) => {

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

 let membersOutput = useLayoutComponentGenerator(
   Member,
   MemberForm,
   members,
   statusMessage
 );

  return membersOutput;
};

export default Members;
