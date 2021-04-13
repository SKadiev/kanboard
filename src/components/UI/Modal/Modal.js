import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const Modal = (props) => {
  return (
    <BootstrapModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="contained-modal-title-vcenter">
          {props.title}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{props.children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
