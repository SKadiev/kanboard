import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  members: [],
};

const setMembers = (state, action) => {
  return updateObject(state, { members: state.members });
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_MEMBERS:
      return setMembers(state.members, action);
    default:
      return state;
  }
};

export default reducer;
