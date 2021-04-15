import { act } from 'react-dom/test-utils';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  members: [],
};

const setProjects = (state, action) => {
  return updateObject(state, { members: state.projects });
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_PROJECTS:
      return setProjects(state.projects, actions);
    default:
      return state;
  }
};

export default reducer;
