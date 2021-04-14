import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import { Row, Col, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import styles from './Projects.module.css';

const projects = ['tote', 'koce', 'lile', 'dzole', 'boce'];

const generateRow = (columnList, id) => {
  return <Row key={id}>{columnList}</Row>;
};

const alignProjectRowsLayout = (projects) => {
  const rowsOrderedList = [];

  projects.forEach((projectName, index) => {
    if (index + 1 === projects.length && index !== 0 && (index + 1) % 2 !== 0) {
      rowsOrderedList.push(
        generateRow(
          <Col md={{ span: 6 }}>
            <div className={styles.Projects}> {projectName}</div>
          </Col>,
          projectName + index
        )
      );
    } else if ((index + 1) % 2 === 0 && index !== 0) {
      rowsOrderedList[index - 1] = generateRow(
        [
          <Col key={projectName + (index - 1)}>
            <div className={styles.Projects}> {projects[index - 1]}</div>
          </Col>,
          <Col key={projectName + index}>
            <div className={styles.Projects}>{projectName}</div>
          </Col>,
        ],
        projectName + index
      );
    }
  });
  return rowsOrderedList;
};

const Projects = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  console.log(alignProjectRowsLayout(projects));
  return (
    <React.Fragment>
      <h1>Projects</h1>

      <Button
        variant="primary"
        clicked={() => setModalShow(true)}
        value="Open modal"
      />
      {ReactDOM.createPortal(
        <Modal
          title="Projects"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          Projects
        </Modal>,
        document.getElementById('modal-content')
      )}

      <Container fluid>{alignProjectRowsLayout(projects)}</Container>
    </React.Fragment>
  );
};

export default Projects;
