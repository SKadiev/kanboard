import { act } from 'react-dom/test-utils';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  members: [],
};

const setMembers = (state, action) => {
  return updateObject(state, { members: action.members });
};

const fetchMembersFailed = (state, action) => {
  return updateObject(state, { members: action.members });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MEMBERS:
      return setMembers(state, action);
    case actions.FETCH_MEMBERS_FAILED:
    //   return setMembers(state.projectsState, actions);
    default:
      return state;
  }
};

export default reducer;
