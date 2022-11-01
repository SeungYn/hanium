import React from 'react';
import styles from './Header.module.css';

export default function Header({ name }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}</h3>
      <button>찾기</button>
    </header>
  );
}
