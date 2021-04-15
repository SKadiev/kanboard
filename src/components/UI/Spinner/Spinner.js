import { Ring } from 'react-spinners-css';
import ReactDOM from 'react-dom';

const Spinner = (props) => {
  return ReactDOM.createPortal(
    <Ring color="blue" {...props} />,
    document.getElementById('spiner-anchor')
  );
};

export default Spinner;
