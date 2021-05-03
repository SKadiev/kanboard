import { Card } from 'react-bootstrap';
import { useActions } from './../../hooks/useActions';
import Button from '../../components/UI/Button/Button';
import { GlobalComponentType } from '../..';

export interface MemberType extends GlobalComponentType {
  id?: number | string;
  img: string;
  name: string;
  role: string;
  uniqueDbId: number;
}

const Member: React.FC<MemberType> = ({
  img,
  name,
  role,
  uniqueDbId,
}: MemberType) => {
  const { deleteMember } = useActions();
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
          clicked={() => deleteMember(uniqueDbId)}
          value="Delete Member"
          variant="danger"
        />
      </Card.Body>
    </Card>
  );
};

export default Member;
