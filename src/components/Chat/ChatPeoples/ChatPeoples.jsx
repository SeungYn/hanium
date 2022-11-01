import React from 'react';
import styles from './ChatPeoples.module.css';

export default function ChatPeoples({ member }) {
  return (
    <li key={member.nickname}>
      <span className={styles.nickname}>{member.nickname}</span>
    </li>
  );
}
