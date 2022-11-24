import React from 'react';
import ChatPeoples from '../ChatPeoples/ChatPeoples';
import styles from './ChatSideBar.module.css';
import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { style } from '@mui/system';
import TextBtn from '../../common/TextBtn/TextBtn';

export default function ChatSideBar({
  sideBarToggle,
  sideBarToggleHandler,
  groupInfo,
  HandlerGroupLeave,
  owner,
  HandlerMemberClick,
  myInfo,
}) {
  console.log(groupInfo);
  const onCloseSideBar = (e) => {
    if ('container' in e.target.dataset) {
      sideBarToggleHandler();
    }
  };

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
          </div>

          <p
            className={`${styles.subject} ${styles.count}`}
          >{`인원 수 : ${groupInfo.currentCount}/${groupInfo.maximumCount}`}</p>

          <ul className={styles.members}>
            <p className={styles.subject}>대화상대</p>
            {groupInfo.memberInfoDtos &&
              groupInfo.memberInfoDtos.map((m) => (
                <li key={m.nickname} className={styles.member}>
                  <span className={styles.nickname}>
                    {myInfo.nickname === m.nickname && '(나) '}
                    {m.nickname}
                  </span>
                  {owner && myInfo.nickname !== m.nickname && (
                    <TextBtn
                      text={'강퇴하기'}
                      handleClick={() => HandlerMemberClick(m)}
                    />
                  )}
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
