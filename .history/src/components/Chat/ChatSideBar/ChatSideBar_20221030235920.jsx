import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';

export default function ChatSideBar({ members }) {
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <ul className={styles.members}>
          <p className={styles.subject}></p>
          {members.map((m) => (
            <ChatPeoples member={m} />
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footer__icon}>나가기</span>
      </footer>
    </section>
  );
}