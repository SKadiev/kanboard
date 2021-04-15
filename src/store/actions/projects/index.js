import * as actions from '../actionTypes';
import axios from '../../../axios';

export const setProjects = (projects) => {
  return {
    type: actions.SET_PROJECTS,
    projects,
  };
};

export const fetchProjectsFailed = (ingredients) => {
  return {
    type: actions.FETCH_PROJECTS_FAILED,
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
