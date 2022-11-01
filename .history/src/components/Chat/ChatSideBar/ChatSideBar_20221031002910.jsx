import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';

export default function ChatSideBar({ members, sideBarToggle }) {
  return (
    <section
      className={`${styles.container} ${
        sideBarToggle ? styles.sideOn : styles.sideOff
      }`}
      onClick={(e) => console.log(e)}
    >
      <div className={styles.menu}>
        <ul className={styles.members}>
          <p className={styles.subject}>대화상대</p>
          {members.map((m) => (
            <ChatPeoples key={m.nickname} member={m} />
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footer__icon}>나가기</span>
      </footer>
    </section>
  );
}
