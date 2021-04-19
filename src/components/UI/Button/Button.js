import React from 'react';
import styles from './Button.css';

import { Button as ReactBotstrapButton } from 'react-bootstrap';

const Button = (props) => {
  return (
    <ReactBotstrapButton
      onClick={props.clicked}
      variant={props.variant || 'primary'}
    >
      {props.value}
    </ReactBotstrapButton>
  );
};

export default  React.memo(Button);
