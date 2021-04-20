import React from 'react';
import { Card , Image} from 'react-bootstrap';
import { deleteMember } from '../../store/actions/';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button'

const Member = (props) => {
  const dispatch = useDispatch();
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            <strong>Member role : {props.role.toUpperCase()}</strong>
        </Card.Text>
        <Button variant="primary" value="Member info" />
        <Button
          clicked={() => dispatch(deleteMember(props.uniqueDbId))}
          value="Delete Member"
          variant="danger"
        />
      </Card.Body>
    </Card>
  );
};

export default Member;
