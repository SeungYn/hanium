import React from 'react';
import styles from './CustomError.module.css';

export default function CustomError({ error, onError }) {
  return (
    <div className={styles.container}>
      <div className={styles.error__form}>
        <p className={styles.text}>{error}</p>
        <div className={styles.btn} onClick={() => onError('')}>
          확인
        </div>
      </div>
    </div>
  );
}
