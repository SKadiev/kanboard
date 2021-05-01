import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Project from '../../containers/Projects/Project';

type GridComponent = string | number;

const LayoutComponentGenerator = (Component, componentPayload) => {
  const generateRow = (columnList, id) => {
    return <Row key={id}>{columnList}</Row>;
  };

  const alignProjectRowsLayout = (components) => {
    const rowsOrderedList = [];

    components.forEach((component, index) => {
      if (components.length === 1) {
        rowsOrderedList.push(
          generateRow(
            <Col key={component.name + index} md={{ span: 6 }}>
              <Component {...component} />
            </Col>,
            component.name + index
          )
        );
      }
      if (
        index + 1 === components.length &&
        index !== 0 &&
        (index + 1) % 2 !== 0
      ) {
        rowsOrderedList.push(
          generateRow(
            <Col key={component.name + index} md={{ span: 6 }}>
              <Component {...component} />
            </Col>,
            component.name + index
          )
        );
      } else if ((index + 1) % 2 === 0 && index !== 0) {
        rowsOrderedList[index - 1] = generateRow(
          [
            <Col key={component.name + (index - 1)}>
              <Component {...components[index - 1]} />
            </Col>,
            <Col key={component.name + index}>
              <Component {...component} />
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
