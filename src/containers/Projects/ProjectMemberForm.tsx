import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import { MemberType } from '../Members/Member';

const ProjectMemberForm: React.FC = (props) => {
  const [member, setMember] = useState('');
  const members = useSelector((state: RootState): MemberType[] => {
    return state.membersState.members;
  });
  const onSumbit = (event) => {
    event.preventDefault();
  };

  let membersOptionList: any[];

  membersOptionList = members.map((member: MemberType, index) => {
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
              let element = e.target as HTMLInputElement;
              setMember(element.value);
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
