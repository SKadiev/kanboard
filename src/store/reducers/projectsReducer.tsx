import { ProjectActions } from '../actions/actionTypes';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject } from '../utility';
import { ProjectType } from '../../containers/Projects/Project';

export interface InitialProjectsState {
  projects: string[];
  loaded: boolean;
  statusMessage: string;
  err: any;
}

interface SetProjectsAction {
  type: ProjectActions.SET_PROJECTS;
  projects: ProjectType[];
}

const InitialProjectsState: InitialProjectsState = {
  projects: [],
  loaded: false,
  err: null,
  statusMessage: '',
};

const setProjects = (
  state: InitialProjectsState,
  action: SetProjectsAction
) => {
  return updateObject<InitialProjectsState, object>(state, {
    projects: action.projects,
  });
};

const setProject = (state: InitialProjectsState, action) => {
  return updateObject<InitialProjectsState, object>(state, {
    projects: [...state.projects, action.project],
  });
};

const fetchProjectsFailed = (state: InitialProjectsState, action) => {
  return updateObject<InitialProjectsState, object>(state, { err: action.err });
};

const fetchProjectFinished = (state: InitialProjectsState, action) => {
  return updateObject<InitialProjectsState, object>(state, { loaded: true });
};

const fetchProjectsStart = (state: InitialProjectsState, action) => {
  return updateObject<InitialProjectsState, object>(state, {
    loaded: false,
    statusMessage: <Spinner />,
  });
};
const projectsEmpty = (state: InitialProjectsState, action) => {
  return updateObject<InitialProjectsState, object>(state, {
    statusMessage: action.message,
  });
};

const projectDeleted = (state: InitialProjectsState, action) => {
  let projectIndexForDelete: number = -1;
  const projectsList = [...state.projects];

  for (let index = 0; index < projectsList.length; index++) {
    const element: any = projectsList[index];
    if (element.uniqueDbId === action.projectId) {
      projectIndexForDelete = index;
      break;
    }
  }

  projectsList.splice(projectIndexForDelete, 1);

  const listAfterRemove = [...projectsList];

  return updateObject<InitialProjectsState, object>(state, {
    projects: listAfterRemove,
  });
};

const reducer = (
  state: InitialProjectsState = InitialProjectsState,
  action
): InitialProjectsState => {
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
