import React from 'react';
import styles from './UpPageToggleBtn.module.css';

export default function UpPageToggleBtn({ name, HandleClick }) {
  return (
    <button className={styles.makerBtn} onClick={() => HandleClick()}>
      {name}
    </button>
  );
}
