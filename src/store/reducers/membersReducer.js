import { act } from 'react-dom/test-utils';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  members: [],
  loaded: false,
  statusMessage: null

};

const setMembers = (state, action) => {
  return updateObject(state, { members: action.members });
};

const fetchMembersFailed = (state, action) => {
  return updateObject(state, { err: action.err });
};

const setMember = (state, action) => {
  return updateObject(state, {
    members: [...state.members, action.member],
  });
};

const fetchMembersFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};

const membersEmpty = (state, action) => {
  return updateObject(state, { statusMessage: action.message });
};

const memberDeleted = (state, action) => {

  const membersList = [... state.members];

  const afterDeleteMembersList = membersList.splice(action.memberId,1, membersList);
 

  return updateObject(state, { menubars: afterDeleteMembersList });
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
    case actions.MEMBERS_EMPTY:
      return membersEmpty(state, action);
    case actions.MEMBER_DELETED:
      return memberDeleted(state, action);
    default:
      return state;
  }
};

export default reducer;
