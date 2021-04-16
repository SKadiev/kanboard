import { act } from 'react-dom/test-utils';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  members: [],
  loaded: false,
};

const setMembers = (state, action) => {
  return updateObject(state, { members: action.members });
};

const fetchMembersFailed = (state, action) => {
  return updateObject(state, { members: action.members });
};

const setMember = (state, action) => {
  return updateObject(state, {
    members: [...state.members, action.member],
  });
};

const fetchMembersFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MEMBERS:
      return setMembers(state, action);
    case actions.FETCH_MEMBERS_FAILED:
      return '';
    case actions.SET_MEMBER:
      return setMember(state, action);
    case actions.FETCH_MEMBERS_FINISHED:
      return fetchMembersFinished(state, action);
    default:
      return state;
  }
};

export default reducer;
