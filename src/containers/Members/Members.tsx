import Member from './Member';
import MemberForm from './MemberForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';
import { RootState } from '../..';
import { useActions } from './../../hooks/useActions';

const Members: React.FC = (props) => {
  const { initMembers } = useActions();
  const members = useSelector((state: RootState) => {
    return state.membersState.members;
  });

  const statusMessage = useSelector((state: RootState) => {
    return state.membersState.statusMessage;
  });

  useEffect(() => {
    initMembers();
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
