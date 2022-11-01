import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';

export default function ChatSideBar({ members }) {
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <ChatPeoples members={members} />
      </div>

      <footer className={styles.footer}>
        <span className={styles.footer__icon}></span>
      </footer>
    </section>
  );
}
