
import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import Button from '../components/UI/Button/Button';
import LayoutComponentGenerator from '../hoc/LayoutComponentGenerator/LayoutComponentGenerator';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/UI/Spinner/Spinner';

const useLayoutComponentGenerator = (Component, ComponentForm, components, statusMessage) => {
  const [componentOutput, setComponentOutput] = useState(<Spinner />);
  const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    setComponentOutput(
      <React.Fragment>
        <Button
          variant="primary"
          clicked={() => setModalShow(true)}
          value={`Add ${Component.name}`}
        />
        {ReactDOM.createPortal(
          <Modal
            title={Component.name + 's'}
            show={modalShow}
            onHide={() => setModalShow(false)}
          >
            <ComponentForm />
          </Modal>,
          document.getElementById('modal-content')
        )}

        {components.length !== 0 ? (
          LayoutComponentGenerator(Component, components)()
        ) : (
          <h1>{statusMessage}</h1>
        )}
      </React.Fragment>
    );
  }, [Component, components, modalShow, statusMessage]);

  
  return componentOutput;
};

export default useLayoutComponentGenerator;
