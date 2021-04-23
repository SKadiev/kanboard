import {ProjectActions} from '../actions/actionTypes';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject } from '../utility';

const initialState  = {
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
  return updateObject(state, { err: action.err });
};

const fetchProjectFinished = (state, action) => {
  return updateObject(state, { loaded: true });
};

const fetchProjectsStart = (state, action) => {
  return updateObject(state, { loaded: false, statusMessage: <Spinner /> });
};
const projectsEmpty = (state, action) => {
  return updateObject(state, { statusMessage: action.message });
};

const projectDeleted = (state, action) => {
  let projectIndexForDelete:number = -1;
  const projectsList = [...state.projects];

  for (let index = 0; index < projectsList.length; index++) {
    const element:any = projectsList[index];
    if (element.uniqueDbId === action.projectId) {
      projectIndexForDelete = index;
      break;
    }
  }

  projectsList.splice(projectIndexForDelete, 1);

  const listAfterRemove = [...projectsList];

  return updateObject(state, { projects: listAfterRemove });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ProjectActions.SET_PROJECTS:
      return setProjects(state, action);
    case ProjectActions.FETCH_PROJECTS_FAILED:
      return fetchProjectsFailed(state, action);
    case ProjectActions.SET_PROJECT:
      return setProject(state, action);
    case ProjectActions.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action);
    case ProjectActions.FETCH_PROJECTS_FINISHED:
      return fetchProjectFinished(state, action);
    case ProjectActions.PROJECTS_EMPTY:
      return projectsEmpty(state, action);
    case ProjectActions.PROJECT_DELETED:
      return projectDeleted(state, action);
    default:
      return state;
  }
};

export default reducer;
