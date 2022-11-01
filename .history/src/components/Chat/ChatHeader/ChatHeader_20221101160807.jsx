import React from 'react';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import styles from './ChatHeader.module.css';

export default function ChatHeader({
  onPrevHandler,
  title,
  sideBarToggleHandler,
}) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <IconContext>
        <div className={styles.leftpart}>
          <button className={styles.prevBtn} onClick={() => navigate(-1)}>
            이전
          </button>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.rightpart}>
          <button className={styles.searchBtn}>검색</button>
          <button
            className={styles.sideBtn}
            onClick={() => sideBarToggleHandler()}
          >
            사이드
          </button>
        </div>
      </IconContext>
    </header>
  );
}
