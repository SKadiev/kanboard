import {MemberActions} from '../actionTypes';
import axios from '../../../axios';
import { fetchProjectsFailed } from '../projects';

export const setMembers = (members:any) => {
  return {
    type: MemberActions.SET_MEMBERS,
    members,
  };
};

export const fetchMembersFailed = (err) => {
  return {
    type: MemberActions.FETCH_MEMBERS_FAILED,
    err,
    result: <p>Error loading members</p>,
  };
};

export const fetchMembersFinished = () => {
  return {
    type: MemberActions.FETCH_MEMBERS_FINISHED,
  };
};

export const fetchMembersStart = () => {
  return {
    type: MemberActions.FETCH_MEMBERS_START,
  };
};

export const setMember = (member: any) => {
  return {
    type: MemberActions.SET_MEMBER,
    member,
  };
};

export const addMemberFailed = (err) => {
  return {
    type: MemberActions.ADD_MEMBER_FAILED,
    err,
  };
};

export const deleteMemberFailed = (memberId: number) => {
  return {
    type: MemberActions.DELETE_MEMBER_FAILED,
    memberId,
  };
};

export const membersEmpty = () => {
  return {
    type: MemberActions.MEMBERS_EMPTY,
    message: 'No Members',
  };
};

export const addNewMember = (member) => {
  const memberData = {
    id: member.name + '_' + new Date().getTime(),
    name: member.name,
    role: member.role,
    img: member.img,
  };

  return (dispatch) => {
    axios
      .post('/members.json', JSON.stringify(memberData))
      .then((response) => {
        if (response.data) {
          dispatch(
            setMember({ ...memberData, uniqueDbId: response.data.name })
          );
        } else {
          dispatch(addMemberFailed(new Error('Cant add member')));
        }
      })
      .catch((err) => dispatch(addMemberFailed(err)));
  };
};

export const memberDeleted = (memberId: number) => {
  return {
    type: MemberActions.MEMBER_DELETED,
    memberId,
  };
};

export const deleteMember = (uniqueDbId: number) => {
  return (dispatch) => {
    axios
      .delete('/members/' + uniqueDbId + '.json')
      .then((response) => {
        if ((response.status = 200)) {
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
    dispatch(fetchMembersStart());
    axios
      .get('/members.json')
      .then((response) => {
        if (!response.data) {
          dispatch(membersEmpty());
        }
        if (response.data) {
          const membersListValues = Object.values(response.data);
          const membersListUniqueIds = Object.keys(response.data);
          const newListOfMembers = membersListValues.map((member: any, index) => {
            return { ...member, uniqueDbId: membersListUniqueIds[index] };
          });
          dispatch(setMembers(newListOfMembers));
        } else {
          dispatch(fetchMembersFailed(new Error('Fetch members Fail')));
        }
      })
      .catch((err) => dispatch(fetchMembersFailed(err)));
  };
};
