import { fetchProjectsFinished } from '../actions';
import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  projects: [],
  loaded: false,
  err: null,
  statusMessage: null,
};

const setProjects = (state, action) => {
  return updateObject(state, { projects: action.projects });
};

const setProject = (state, action) => {
  return updateObject(state, {
    projects: [...state.projects, action.project],
  });
};

const fetchProjectsFailed = (state, action) => {
  return updateObject(state, { err:action.err });
};

const fetchProjectFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};

const projectsEmpty = (state, action) => {
  return updateObject(state, { statusMessage: action.message });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PROJECTS:
      return setProjects(state, action);
    case actions.FETCH_PROJECTS_FAILED:
      return fetchProjectsFailed(state, action);
    case actions.SET_PROJECT:
      return setProject(state, action);
    case actions.FETCH_PROJECTS_FINISHED:
      return fetchProjectFinished(state, action);
    case actions.PROJECTS_EMPTY:
      return projectsEmpty(state, action);
    default:
      return state;
  }
};

export default reducer;
