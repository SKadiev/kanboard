import React from 'react';
import styles from './MemberAvatar.module.css';

const MemberAvatar = (props) => {
  return <span className={styles.MemberAvatar}>{props.member.name}<img src={props.member.img} /></span>;
};

export default MemberAvatar;
