import React from 'react';
import styles from './ChatSideBar.module.css';

export default function ChatSideBar() {
  return (
    <section className={styles.container}>
      <section className={styles.menu}>
        <ul className={styles.peoples}></ul>
      </section>
    </section>
  );
}
