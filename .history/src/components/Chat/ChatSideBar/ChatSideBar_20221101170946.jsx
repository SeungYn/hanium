import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';
import { BiExit } from 'react-icons/bi';

export default function ChatSideBar({
  members,
  sideBarToggle,
  sideBarToggleHandler,
}) {
  const onCloseSideBar = (e) => {
    if ('container' in e.target.dataset) {
      sideBarToggleHandler();
    }
  };
  console.log(members);
  return (
    <section
      className={`${styles.container} ${
        sideBarToggle ? styles.sideOn : styles.sideOff
      }`}
      onClick={onCloseSideBar}
      data-container={true}
    >
      <div className={styles.menu}>
        <ul className={styles.members}>
          <p className={styles.subject}>대화상대</p>
          {members &&
            members.map((m) => <ChatPeoples key={m.nickname} member={m} />)}
        </ul>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footer__icon}>
          <ImExit />
        </span>
      </footer>
    </section>
  );
}
