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

export const addProject = (project) => {
  return {
    type: actions.ADD_PROJECT,
    project,
  };
};

export const initProjects = () => {
  return (dispatch) => {
    axios.get('/projects.json').then((response) => {
      if (response.data) {
        let resData = response.data.split(',').map((project) => {
          return {
            name: project,
          };
        });
        dispatch(setProjects(resData));
      } else {
        dispatch(fetchProjectsFailed());
      }
    });
  };
};
