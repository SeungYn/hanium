import React from 'react';
import styles from './ChatPeoples.module.css';

export default function ChatPeoples({ members }) {
  return (
    <ul className={styles.members}>
      {members.map((m) => (
        <li key={members.nickname}></li>
      ))}
    </ul>
  );
}
