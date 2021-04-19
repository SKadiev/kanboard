import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../assets/logo192.png';
import { deleteMember } from '../../store/actions/';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button'

const Member = (props) => {
  const dispatch = useDispatch();
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" value="Go somewhere" />
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
