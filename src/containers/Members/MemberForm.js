import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMember, setMembers } from '../../store/actions/';
import logo from '../../assets/logo192.png';

const MemberForm = (props) => {
  const [memberNameValue, setInputValue] = useState('');
  const [memberRoleValue, setMemberRoleValue] = useState('regular');

  const dispatch = useDispatch();
  const onSumbit = (event) => {
    event.preventDefault();
    const memberData = {
      name: memberNameValue,
      role: memberRoleValue,
      img: logo
    };

    dispatch(addNewMember(memberData));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Member</Form.Label>
        <Form.Control
          value={memberNameValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Member name"
        />
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Member Role</Form.Label>
          <Form.Control
            onChange={(e) => {
              setMemberRoleValue(e.target.value);
            }}
            as="select"
            custom
          >
            <option value="admin">Admin</option>
            <option value="regular" >Regular</option>
          </Form.Control>
        </Form.Group>
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemberForm;
