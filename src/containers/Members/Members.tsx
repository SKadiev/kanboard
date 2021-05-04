import Member from './Member';
import MemberForm from './MemberForm';
import { useEffect } from 'react';
import useLayoutComponentGenerator from '../../hooks/use-layoutContainerGenerator';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const Members: React.FC = (props) => {
  const { initMembers } = useActions();
  const members = useTypedSelector((state) => {
    return state.membersState.members;
  });

  const statusMessage = useTypedSelector((state) => {
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
