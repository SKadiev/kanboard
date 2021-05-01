import { Card } from 'react-bootstrap';
import { deleteMember } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import PropTypes from 'prop-types';

export type MemberType = {
  img: string;
  name: string;
  role: string;
  uniqueDbId: number;
};

const Member = ({ img, name, role, uniqueDbId }: MemberType) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Member role : {role.toUpperCase()}</strong>
        </Card.Text>
        <Button variant="primary" value="Member info" />
        <Button
          clicked={() => dispatch(deleteMember(uniqueDbId))}
          value="Delete Member"
          variant="danger"
        />
      </Card.Body>
    </Card>
  );
};

Member.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  uniqueDbId: PropTypes.string,
};

export default Member;
