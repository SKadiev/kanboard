import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMember, setMembers } from '../../store/actions/';
import MemberAvatar from '../Members/MemberAvatar';
import MemberForm from '../Members/MemberForm';
const ProjectMemberForm = (props) => {
  const [member, setMember] = useState(null);
  const dispatch = useDispatch();
  const members = useSelector((state) => {
    return state.membersState.members;
  });
  const onSumbit = (event) => {
    event.preventDefault();
  };

  let membersOptionList = [];

  membersOptionList = members.map((member, index) => {
    return (
      <option key={member.name + index} value={member.name}>
        {member.name}
      </option>
    );
  });

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Member</Form.Label>

        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Member Select</Form.Label>
          <Form.Control
            onChange={(e) => {
              setMember(e.target.value);
            }}
            as="select"
            custom
          >
            {membersOptionList}
          </Form.Control>
        </Form.Group>
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProjectMemberForm;
