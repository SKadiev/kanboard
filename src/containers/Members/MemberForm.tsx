import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from '../../assets/logo192.png';
import { useActions } from '../../hooks/useActions';

const MemberForm: React.FC = (props) => {
  const [memberNameValue, setInputValue] = useState('');
  const [memberRoleValue, setMemberRoleValue] = useState('regular');
  const { addNewMember } = useActions();

  const onSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    const memberData = {
      name: memberNameValue,
      role: memberRoleValue,
      img: logo,
    };

    addNewMember(memberData);
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
            <option value="regular">Regular</option>
          </Form.Control>
          <Form.Group>
            <Form.File id="custom-file" label="Custom file input" custom />
          </Form.Group>
        </Form.Group>
      </Form.Group>
      <Button onClick={onSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemberForm;
