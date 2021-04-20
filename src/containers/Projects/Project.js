import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/';
import styles from './Project.module.css';
import Button from '../../components/UI/Button/Button';
import { Card } from 'react-bootstrap';
import MemberAvatar from '../../containers/Members/MemberAvatar'

import {
  initMembers
} from '../../store/actions/';


const Project = (props) => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.membersState.members);
  let membersList = <ul>{members.map(member => {
     return (
       <li key={member.id}>
         <MemberAvatar member={member} />
       </li>
     );
    }
  )}
  </ul>;
  
  useEffect(() => {
    if(members.length === 0) {
      dispatch(initMembers());
    } 

  }, [members])

  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className={styles.Project}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
            <strong>Members</strong>
            {membersList}
          <Button variant="primary" value="Open Project info" />
          <Button
            clicked={() => dispatch(deleteProject(props.uniqueDbId))}
            value="Delete Project"
            variant="danger"
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Project;
