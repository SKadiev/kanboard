import { MemberType } from './Member';
import styles from './MemberAvatar.module.css';

const MemberAvatar: React.FC<MemberType> = ({ img, name }) => {
  return (
    <span className={styles.MemberAvatar}>
      {name}
      <img src={img} alt={name} />
    </span>
  );
};

export default MemberAvatar;
