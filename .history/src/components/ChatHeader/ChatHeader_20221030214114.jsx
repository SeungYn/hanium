import React from 'react';
import styles from './ChatHeader.module.css';

export default function ChatHeader({ onPrevHandler, title }) {
  return (
    <header>
      <div className={styles.leftpart}>
        <button
          className={styles.prevBtn}
          onClick={() => console.log('이전 페이지로 이동')}
        >
          이전
        </button>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.rightpart}>
        <button className={styles.searchBtn}>검색</button>
        <button className={styles.sideBtn}>사이드</button>
      </div>
    </header>
  );
}
