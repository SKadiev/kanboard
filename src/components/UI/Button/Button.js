import React from 'react';
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

export default Button;
