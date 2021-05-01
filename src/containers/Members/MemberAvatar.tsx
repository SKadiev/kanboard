import { MemberType } from './Member';
import styles from './MemberAvatar.module.css';

const MemberAvatar = ({ member }: MemberType) => {
  return (
    <span className={styles.MemberAvatar}>
      {member.name}
      <img src={member.img} alt={member.name} />
    </span>
  );
};

export default MemberAvatar;
