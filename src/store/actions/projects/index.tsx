import {ProjectActions} from '../actionTypes';
import axios from '../../../axios';

export const setProjects = (projects) => {
  return {
    type: ProjectActions.SET_PROJECTS,
    projects,
  };
};

export const fetchProjectsFailed = (err: any) => {
  return {
    type: ProjectActions.FETCH_PROJECTS_FAILED,
    result: <p>Error loading projects</p>,
    err,
  };
};

export const projectsEmpty = () => {
  return {
    type: ProjectActions.PROJECTS_EMPTY,
    message: 'No Projects',
  };
};

export const addProjectFailed = (err: any) => {
  return {
    type: ProjectActions.ADD_PROJECT_FAILED,
    err,
  };
};

export const addProjectSuccess = () => {
  return {
    type: ProjectActions.ADD_PROJECT_SUCCESS,
  };
};

export const fetchProjectsFinished = () => {
  return {
    type: ProjectActions.FETCH_PROJECTS_FINISHED,
  };
};

export const setProject = (project) => {
  return {
    type: ProjectActions.SET_PROJECT,
    project,
  };
};

export const addNewProject = (project) => {
  const projectData = {
    id: project + '_' + new Date().getTime(),
    name: project,
  };

  return (dispatch) => {
    axios
      .post('/projects.json', JSON.stringify(projectData))
      .then((response) => {
        if (response.data) {
          dispatch(
            setProject({ ...projectData, uniqueDbId: response.data.name })
          );
        } else {
          dispatch(addProjectFailed(new Error('Cant add project')));
        }
      })
      .catch((err) => dispatch(addProjectFailed(err)));
  };
};

export const projectDeleted = (projectId: number) => {
  return {
    type: ProjectActions.PROJECT_DELETED,
    projectId,
  };
};

export const deleteProjectFailed = (projectId: number) => {
  return {
    type: ProjectActions.DELETE_PROJECT_FAILED,
    projectId,
  };
};

export const deleteProject = (uniqueDbId: number) => {
  return (dispatch) => {
    axios
      .delete('/projects/' + uniqueDbId + '.json')
      .then((response) => {
        if ((response.status = 200)) {
          dispatch(projectDeleted(uniqueDbId));
        } else {
          dispatch(deleteProjectFailed(uniqueDbId));
        }
      })
      .catch((e) => console.log(e));
  };
};

export const fetcProjectsStart = () => {
  return {
    type: ProjectActions.FETCH_PROJECTS_START,
  };
};

export const initProjects = () => {
  return (dispatch) => {
    dispatch(fetcProjectsStart());
    axios
      .get('/projects.json')
      .then((response) => {
        if (!response.data) {
          dispatch(projectsEmpty());
        }
        if (response.data) {
          const projectListValues = Object.values(response.data);
          const projectsListUniqueIds = Object.keys(response.data);
          const newListOfProjects = projectListValues.map((project:any, index) => {
            return { ...project, uniqueDbId: projectsListUniqueIds[index] };
          });
          dispatch(setProjects(newListOfProjects));
        } else {
          dispatch(fetchProjectsFailed(new Error('Fetch members Fail')));
        }
      })
      .catch((err) => dispatch(fetchProjectsFailed(err)));
  };
};
