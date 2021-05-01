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
import PropTypes from 'prop-types';

const Project = ({ name, uniqueDbId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  const members = useSelector((state) => state.membersState.members);
  let membersList = (
    <ul>
      {members.map((member) => {
        return (
          <li key={member.id}>
            <MemberAvatar member={member} />
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
            document.getElementById('modal-content')
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

Project.propTypes = {
  name: PropTypes.string,
  uniqueDbId: PropTypes.string,
};

export default Project;
