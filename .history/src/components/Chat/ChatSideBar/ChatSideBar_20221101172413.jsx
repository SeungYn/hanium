import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';
import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export default function ChatSideBar({
  members,
  sideBarToggle,
  sideBarToggleHandler,
  groupInfo,
  HandlerGroupLeave,
}) {
  const onCloseSideBar = (e) => {
    if ('container' in e.target.dataset) {
      sideBarToggleHandler();
    }
  };
  console.log(members);
  return (
    <IconContext.Provider value={{ className: styles.icon }}>
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
          <div>
            <p className={styles.subject}>그룹 정보</p>
            {groupInfo && <p className={styles.subject}>f</p>}
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.footer__icon}>
            <BiExit />
          </span>
        </footer>
      </section>
    </IconContext.Provider>
  );
}
