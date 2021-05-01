import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/';
import styles from './Project.module.css';
import Button from '../../components/UI/Button/Button';
import { Card } from 'react-bootstrap';
import MemberAvatar from '../../containers/Members/MemberAvatar';
import ProjectMemberForm from '../../containers/Projects/ProjectMemberForm';
import Modal from '../../components/UI/Modal/Modal';
import { initMembers } from '../../store/actions/';
import { RootState } from '../..';
import { MemberType } from '../Members/Member';

export type ProjectType = {
  id?: number;
  name: string;
  uniqueDbId: number;
};

const Project: React.FC<ProjectType> = ({ name, uniqueDbId }: ProjectType) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  const members: MemberType[] = useSelector(
    (state: RootState) => state.membersState.members
  );
  let membersList = (
    <ul>
      {members.map((member: MemberType) => {
        return (
          <li key={member.id}>
            <MemberAvatar {...member} />
          </li>
        );
      })}
    </ul>
  );

  useEffect(() => {
    if (members.length === 0) {
      dispatch(initMembers());
    }
  }, [members, dispatch]);

  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className={styles.Project}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <strong>Members</strong>
          {membersList}
          <Button
            variant="primary"
            value="Add member"
            clicked={() => setModalShow(true)}
          />
          {ReactDOM.createPortal(
            <Modal
              title="Add member"
              show={modalShow}
              onHide={() => setModalShow(false)}
            >
              <ProjectMemberForm />
            </Modal>,
            document.getElementById('modal-content')!
          )}

          <Button
            clicked={() => dispatch(deleteProject(uniqueDbId))}
            value="Delete Project"
            variant="danger"
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Project;
