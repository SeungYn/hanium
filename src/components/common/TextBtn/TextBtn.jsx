import React from 'react';
import styles from './TextBtn.module.css';

export default function TextBtn({ text, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
}
