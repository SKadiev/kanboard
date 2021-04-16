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
    result: <p>Error loading members</p>,
  };
};

export const fetchMembersFinished = () => {
  return {
    type: actions.FETCH_MEMBERS_FINISHED,
  };
};

export const setMember = (member) => {
  return {
    type: actions.SET_MEMBER,
    member,
  };
};

export const addMemberFailed = (project) => {
  return {
    type: actions.ADD_MEMBER_FAILED,
    project,
  };
};


export const addNewMember = (currenMembers, member) => {
  return (dispatch) => {
    axios
      .put(
        '/members.json',
        JSON.stringify(
          currenMembers.map((e) => e.name).join(',') + ', ' + member
        )
      )
      .then((response) => {
        if (response.data) {
          dispatch(setMember({ name: member }));
        } else {
          dispatch(addMemberFailed());
        }
      });
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
