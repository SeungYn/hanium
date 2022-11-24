import React from 'react';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import styles from './ChatHeader.module.css';
import { BsSearch, BsList } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import IconBtn from '../../common/IconBtn/IconBtn';

export default function ChatHeader({
  onPrevHandler,
  title,
  sideBarToggleHandler,
}) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <IconContext.Provider value={{ className: styles.icon }}>
        <div className={styles.leftpart}>
          <IconBtn handleClick={() => navigate(-1)}>
            <BiArrowBack />
          </IconBtn>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.rightpart}>
          <button
            className={styles.sideBtn}
            onClick={() => sideBarToggleHandler()}
          >
            <BsList />
          </button>
        </div>
      </IconContext.Provider>
    </header>
  );
}
