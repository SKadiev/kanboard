import * as actions from '../actionTypes';

export const setMembers = (members) => {
  return {
    type: actions.SET_MEMBERS,
    members,
  };
};

export const fetchMembersFailed = (ingredients) => {
  return {
    type: actions.FETCH_PROJECTS_FAILED,
  };
};

export const initMembers = () => {
  return (dispatch) => {
    axios.get('/projects.json').then((response) => {
      if (response.data) {
        dispatch(setMembers(response.data));
      } else {
        dispatch(fetchMembersFailed());
      }
    });
  };
};
