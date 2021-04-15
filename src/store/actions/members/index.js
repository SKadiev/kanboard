import * as actions from '../actionTypes';
import axios from '../../../axios';

export const setMembers = (members) => {
  return {
    type: actions.SET_MEMBERS,
    members,
  };
};

export const fetchMembersFailed = () => {
  return {
    type: actions.FETCH_MEMBERS_FAILED,
    result: <p>Error</p>,
  };
};

export const initMembers = () => {
  return (dispatch) => {
    axios.get('/members.json').then((response) => {
      if (response.data) {
        let resData = response.data.split(',').map((member) => {
          return {
            name: member,
          };
        });
        dispatch(setMembers(resData));
      } else {
        dispatch(fetchMembersFailed());
      }
    });
  };
};
