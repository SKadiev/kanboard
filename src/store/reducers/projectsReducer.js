import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  projects: [],
};

const setProjects = (state, action) => {
  return updateObject(state, { projects: action.projects });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROJECTS:
      return setProjects(state.projectsState, action);
    case actions.FETCH_PROJECTS_FAILED:

    default:
      return state;
  }
};

export default reducer;
