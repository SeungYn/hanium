import React from 'react';
import styles from './Note.module.css';

export default function Note({ note: { id, message, sendStatus }, note }) {
  return (
    <li className={styles.note}>
      <div className={styles.header}>
        <span
          className={`${styles.sender} ${
            sendStatus === 'receive' && styles.reciver
          }`}
        >
          {sendStatus === 'receive' ? '받는 쪽지' : '보낸 쪽지'}
        </span>
      </div>
      <p className={styles.message}>{message}</p>
    </li>
  );
}
