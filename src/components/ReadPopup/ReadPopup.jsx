import React from 'react';
import styles from './ReadPopup.module.css';

export default function ReadPopup({ content, onHandler, type }) {
  return (
    <div className={styles.container}>
      <div className={styles.error__form}>
        <p className={styles.text}>
          {type === 'error' ? content.message : content}
        </p>
        <button className={styles.btn} onClick={() => onHandler('')}>
          확인
        </button>
      </div>
    </div>
  );
}
