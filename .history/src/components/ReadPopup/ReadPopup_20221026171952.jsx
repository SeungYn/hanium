import React from 'react';
import styles from './CustomError.module.css';

export default function ReadPopup({ error, onError }) {
  return (
    <div className={styles.container}>
      <div className={styles.error__form}>
        <p className={styles.text}>{error.message}</p>
        <div className={styles.btn} onClick={() => onError('')}>
          확인
        </div>
      </div>
    </div>
  );
}
