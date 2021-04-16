import { fetchProjectsFinished } from '../actions';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  projects: [],
  loaded: false,
};

const setProjects = (state, action) => {
  return updateObject(state, { projects: action.projects });
};

const setProject = (state, action) => {
  return updateObject(state, {
    projects: [...state.projects, action.project],
  });
};

const fetchProjectFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROJECTS:
      return setProjects(state, action);
    case actions.FETCH_PROJECTS_FAILED:
      throw new Error();
    case actions.SET_PROJECT:
      return setProject(state, action);
    case actions.FETCH_PROJECTS_FINISHED:
      return fetchProjectFinished(state, action);
    default:
      return state;
  }
};

export default reducer;
