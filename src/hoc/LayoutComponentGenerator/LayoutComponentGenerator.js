import React, { useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import { Row, Col, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import styles from './Projects.module.css';

const LayoutComponentGenerator = (Component, componentPayload) => {
  const generateRow = (columnList, id) => {
    return <Row key={id}>{columnList}</Row>;
  };

  const alignProjectRowsLayout = (components) => {
    const rowsOrderedList = [];

    components.forEach((component, index) => {
      if (
        index + 1 === components.length &&
        index !== 0 &&
        (index + 1) % 2 !== 0
      ) {
        rowsOrderedList.push(
          generateRow(
            <Col md={{ span: 6 }}>
              <div className={styles.Projects}>
                {' '}
                <Component {...component} />{' '}
              </div>
            </Col>,
            component.name + index
          )
        );
      } else if ((index + 1) % 2 === 0 && index !== 0) {
        rowsOrderedList[index - 1] = generateRow(
          [
            <Col key={component.name + (index - 1)}>
              <div className={styles.Projects}>
                <Component {...components[index - 1]} />
              </div>
            </Col>,
            <Col key={component.name + index}>
              <div className={styles.Projects}>
                <Component {...component} />
              </div>
            </Col>,
          ],
          component.name + index
        );
      }
    });
    return rowsOrderedList;
  };

  return () => {
    return (
      <React.Fragment>
        <Container fluid>{alignProjectRowsLayout(componentPayload)}</Container>
      </React.Fragment>
    );
  };
};

export default LayoutComponentGenerator;
