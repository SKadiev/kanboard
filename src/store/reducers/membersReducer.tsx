import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';
import Spinner from '../../components/UI/Spinner/Spinner';

const initialState: {
  loaded:boolean,
  statusMessage:string,
  members: []
} = {
  members: [],
  loaded: false,
  statusMessage: '',
};

const setMembers = (state: object, action) => {
  return updateObject(state, { members: action.members });
};

const fetchMembersFailed = (state: object, action: any) => {
  return updateObject(state, { err: action.err });
};

const setMember = (state: {members:[]},action) => {
  return updateObject(state, {
    members: [...state.members, action.member],
  });
};

const fetchMembersFinished = (state: object, action) => {
  return updateObject(state, { loaded: true, statusMessage: '' });
};

const fetchMembersStart = (state: object, action) => {
  return updateObject(state, { loaded: false, statusMessage: <Spinner /> });
};

const membersEmpty = (state: object, action: {message:string}) => {
  return updateObject(state, { statusMessage: action.message });
};

const memberDeleted = (state: {members:[]}, action) => {
  let memberIndexForDelete:number = 0;
  const membersList = [...state.members];

  for (let index = 0; index < membersList.length; index++) {
    const element:any = membersList[index];
    if (element.uniqueDbId === action.memberId) {
      memberIndexForDelete = index;
      break;
    }
  }

  membersList.splice(memberIndexForDelete, 1);

  const listAfterRemove = [...membersList];

  return updateObject(state, { members: listAfterRemove });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MEMBERS:
      return setMembers(state, action);
    case actions.FETCH_MEMBERS_FAILED:
      return fetchMembersFailed(state, action);
    case actions.SET_MEMBER:
      return setMember(state, action);
    case actions.FETCH_MEMBERS_FINISHED:
      return fetchMembersFinished(state, action);
    case actions.FETCH_MEMBERS_START:
      return fetchMembersStart(state, action);
    case actions.MEMBERS_EMPTY:
      return membersEmpty(state, action);
    case actions.MEMBER_DELETED:
      return memberDeleted(state, action);
    default:
      return state;
  }
};

export default reducer;
