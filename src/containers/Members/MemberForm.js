import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMember } from '../../store/actions/';

const MemberForm = (props) => {
  const [memberValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const members = useSelector((state) => {
    return state.membersState.members;
  });

  const onSumbit = (event) => {
    event.preventDefault();
    dispatch(addNewMember(members, memberValue));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add Member</Form.Label>
        <Form.Control
          value={memberValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Member name"
        />
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemberForm;
