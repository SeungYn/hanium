import React from 'react';
import styles from './ReadPopup.module.css';

export default function ReadPopup({ content, onHandler, type }) {
  return (
    <div className={styles.container}>
      <div className={styles.error__form}>
        <p className={styles.text}>{content.message}</p>
        <div className={styles.btn} onClick={() => onHandler('')}>
          확인
        </div>
      </div>
    </div>
  );
}
