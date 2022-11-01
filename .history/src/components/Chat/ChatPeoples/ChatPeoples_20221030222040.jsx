import React from 'react';
import styles from './ChatPeoples.module.css';

export default function ChatPeoples({ members }) {
  return (
    <ul className={styles.members}>
      <p className={styles.subject}>대화상대</p>
      {members.map((m) => (
        <li key={m.nickname}>
          <span className={styles.nickname}>{m.nickname}</span>
        </li>
      ))}
    </ul>
  );
}
