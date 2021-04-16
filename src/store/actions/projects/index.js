import * as actions from '../actionTypes';
import axios from '../../../axios';

export const setProjects = (projects) => {
  return {
    type: actions.SET_PROJECTS,
    projects,
  };
};

export const fetchProjectsFailed = () => {
  return {
    type: actions.FETCH_PROJECTS_FAILED,
    result: <p>Error loading projects</p>,
  };
};

export const addProjectFailed = () => {
  return {
    type: actions.ADD_PROJECT_FAILED,
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
  return (dispatch) => {
    axios.put('/projects.json', JSON.stringify(project)).then((response) => {
      if (response.data) {
        dispatch(setProject(project));
      } else {
        dispatch(addProjectFailed());
      }
    });
  };
};

export const initProjects = () => {
  return (dispatch) => {
    axios.get('/projects.json').then((response) => {
      if (response.data) {
        let resData = null;
        if (response.data.indexOf(',') === -1) {
          resData = [{ name: response.data }];
        } else {
          resData = response.data.split(',').map((project) => {
            return {
              name: project,
            };
          });
        }
        dispatch(setProjects(resData));
      } else {
        dispatch(fetchProjectsFailed());
      }
    });
  };
};
