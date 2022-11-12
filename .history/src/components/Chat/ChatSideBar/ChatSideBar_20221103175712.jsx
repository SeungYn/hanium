import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';
import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { style } from '@mui/system';

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
          <div className={styles.groupInfo}>
            <p className={styles.subject}>그룹 정보</p>
            <p>{groupInfo.clubName}</p>
            <p>{groupInfo.clubName}</p>
          </div>

          <ul className={styles.members}>
            <p className={styles.subject}>대화상대</p>
            {groupInfo.memberInfoDtos &&
              groupInfo.memberInfoDtos.map((m) => (
                <li key={m.nickname}>
                  <span className={styles.nickname}>{m.nickname}</span>
                </li>
              ))}
          </ul>
        </div>

        <footer className={styles.footer}>
          <span
            className={styles.footer__icon}
            onClick={() => HandlerGroupLeave(groupInfo?.clubId)}
          >
            <BiExit />
          </span>
        </footer>
      </section>
    </IconContext.Provider>
  );
}
