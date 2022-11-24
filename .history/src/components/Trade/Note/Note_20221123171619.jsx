import React from 'react';
import { timeFormat } from '../../../util/data';
import styles from './Note.module.css';

export default function Note({
  note: { id, message, sendStatus, sendTime },
  note,
}) {
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
        <span className={styles.time}>{`${timeFormat(sendTime)[0]} ${
          timeFormat(sendTime)[1]
        }`}</span>
      </div>
      <p className={styles.message}>{message}</p>
    </li>
  );
}
