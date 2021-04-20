import * as actions from '../actionTypes';
import axios from '../../../axios';

export const setProjects = (projects) => {
  return {
    type: actions.SET_PROJECTS,
    projects
  };
};

export const fetchProjectsFailed = (err) => {
  return {
    type: actions.FETCH_PROJECTS_FAILED,
    result: <p>Error loading projects</p>,
    err
  };
};


export const projectsEmpty = () => {
  return {
    type: actions.PROJECTS_EMPTY,
    message: 'No Projects',
  };
};

export const addProjectFailed = (err) => {
  return {
    type: actions.ADD_PROJECT_FAILED,
    err
  };
};

export const addProjectSuccess = () => {
  return {
    type: actions.ADD_PROJECT_SUCCESS,
  };
};

export const fetchProjectsFinished = () => {
  return {
    type: actions.FETCH_PROJECTS_FINISHED,
  };
};

export const setProject = (project) => {
  return {
    type: actions.SET_PROJECT,
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


export const projectDeleted = (projectId) => {

  return {
    type: actions.PROJECT_DELETED,
    projectId,
  };
};


export const deleteProjectFailed = (projectId) => {
  return {
    type: actions.DELETE_PROJECT_FAILED,
    projectId,
  };
};



export const deleteProject = (uniqueDbId) => {
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
    type: actions.FETCH_PROJECTS_START,
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
          const newListOfProjects = projectListValues.map((project, index) => {
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