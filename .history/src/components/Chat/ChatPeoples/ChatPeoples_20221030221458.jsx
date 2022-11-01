import React from 'react';
import styles from './ChatPeoples.module.css';

export default function ChatPeoples({ members }) {
  return (
    <ul className={styles.members}>
      <span>대화상대</span>
      {members.map((m) => (
        <li key={members.nickname}>ㅔ</li>
      ))}
    </ul>
  );
}
