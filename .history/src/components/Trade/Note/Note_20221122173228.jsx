import React from 'react';
import styles from './Note.module.css';

export default function Note({ note: { id, message, sendStatus }, note }) {
  return (
    <li>
      <div>
        <span>{sendStatus === 'receive' ? '받는 쪽지' : '보낸 쪽지'}</span>
        시간
      </div>
      <p>{message}</p>
    </li>
  );
}
