import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  projects: [],
  loaded: false,
};

const setProjects = (state, action) => {
  return updateObject(state, { projects: action.projects });
};

const addProject = (state, action) => {
  return updateObject(state, {
    projects: [...state.projectsState.projects, action.project],
  });
};

const fetchProjectFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROJECTS:
      return setProjects(state.projectsState, action);
    case actions.FETCH_PROJECTS_FAILED:
      throw new Error();
    case actions.ADD_PROJECT:
    case actions.FETCH_MEMBERS_FINISHED:
    default:
      return state;
  }
};

export default reducer;
