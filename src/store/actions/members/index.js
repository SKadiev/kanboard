import * as actions from '../actionTypes';
import axios from '../../../axios';
import { fetchProjectsFailed } from '../projects';

export const setMembers = (members) => {
  return {
    type: actions.SET_MEMBERS,
    members,
  };
};

export const fetchMembersFailed = (err) => {
  return {
    type: actions.FETCH_MEMBERS_FAILED,
    err,
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
    member
  };
};

export const addMemberFailed = (err) => {
  return {
    type: actions.ADD_MEMBER_FAILED,
    err
  };
};

export const deleteMemberFailed = (memberId) => {
  return {
    type: actions.DELETE_MEMBER_FAILED,
    memberId
  };
};

export const membersEmpty = () => {
  return {
    type: actions.MEMBERS_EMPTY,
    message: "No Members"
  };
};




export const addNewMember = (member) => {

  const memberData = {
    id: member  + '_' + new Date().getTime(),   
    name: member
  }

  return (dispatch) => {
    axios
      .post('/members.json', JSON.stringify(memberData))
      .then((response) => {
        
        if (response.data) {
          console.log({ ...memberData, uniqueDbId: response.data.name });
          dispatch(setMember({...memberData, uniqueDbId: response.data.name}));
        } else {
          dispatch(addMemberFailed( new Error('Cant add member')));
        }
      })
      .catch((err) => dispatch(addMemberFailed(err)));
  };
};


export const memberDeleted = (memberId) => {
  console.log('memberDeleted');

  return {
    type: actions.MEMBER_DELETED,
    memberId
  };
};



export const deleteMember = (uniqueDbId) => {

  return (dispatch) => {

    axios
      .delete('/members/' + uniqueDbId  + '.json' )
      .then((response) => {
        if (response.status = 200) {
          dispatch(memberDeleted(uniqueDbId));
        } else {
          dispatch(deleteMemberFailed(uniqueDbId));
        }
      })
      .catch((e) => console.log(e));
  };
};


export const initMembers = () => {
  return (dispatch) => {
    axios
      .get('/members.json')
      .then((response) => {
         if (!response.data) {
           dispatch(membersEmpty());
         }
        if (response.data) {
          const membersListValues = (Object.values(response.data));
          const membersListUniqueIds = Object.keys(response.data);
          const newListOfMembers = membersListValues
            .map((member, index) => {

              return { ...member, uniqueDbId: membersListUniqueIds[index] };
            })
          dispatch(setMembers(newListOfMembers));
        } else {
          dispatch(fetchMembersFailed(new Error("Fetch members Fail")));
        }
      })
      .catch((err) => dispatch(fetchMembersFailed(err)));
  };
};
