import { MemberActions } from '../actions/actionTypes';
import { updateObject } from '../utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import { MemberType } from '../../containers/Members/Member';

export interface InitialMembersState {
  members: MemberType[];
  loaded: boolean;
  statusMessage: string;
}

const InitialMembersState: InitialMembersState = {
  members: [],
  loaded: false,
  statusMessage: '',
};

const setMembers = (state: InitialMembersState, action) => {
  return updateObject<InitialMembersState, object>(state, {
    members: action.members,
  });
};

const fetchMembersFailed = (state: InitialMembersState, action) => {
  return updateObject<InitialMembersState, object>(state, { err: action.err });
};

const setMember = (state: InitialMembersState, action) => {
  return updateObject<InitialMembersState, object>(state, {
    members: [...state.members, action.member],
  });
};

const fetchMembersFinished = (state: InitialMembersState, action) => {
  return updateObject<InitialMembersState, object>(state, {
    loaded: true,
    statusMessage: '',
  });
};

const fetchMembersStart = (state: InitialMembersState, action) => {
  return updateObject<InitialMembersState, object>(state, {
    loaded: false,
    statusMessage: <Spinner />,
  });
};

const membersEmpty = (
  state: InitialMembersState,
  action: { message: string }
) => {
  return updateObject<InitialMembersState, object>(state, {
    statusMessage: action.message,
  });
};

const memberDeleted = (state: InitialMembersState, action) => {
  let memberIndexForDelete: number = 0;
  const membersList = [...state.members];

  for (let index = 0; index < membersList.length; index++) {
    const element: any = membersList[index];
    if (element.uniqueDbId === action.memberId) {
      memberIndexForDelete = index;
      break;
    }
  }

  membersList.splice(memberIndexForDelete, 1);

  const listAfterRemove = [...membersList];

  return updateObject<InitialMembersState, object>(state, {
    members: listAfterRemove,
  });
};

const reducer = (state: InitialMembersState = InitialMembersState, action) => {
  switch (action.type) {
    case MemberActions.SET_MEMBERS:
      return setMembers(state, action);
    case MemberActions.FETCH_MEMBERS_FAILED:
      return fetchMembersFailed(state, action);
    case MemberActions.SET_MEMBER:
      return setMember(state, action);
    case MemberActions.FETCH_MEMBERS_FINISHED:
      return fetchMembersFinished(state, action);
    case MemberActions.FETCH_MEMBERS_START:
      return fetchMembersStart(state, action);
    case MemberActions.MEMBERS_EMPTY:
      return membersEmpty(state, action);
    case MemberActions.MEMBER_DELETED:
      return memberDeleted(state, action);
    default:
      return state;
  }
};

export default reducer;
