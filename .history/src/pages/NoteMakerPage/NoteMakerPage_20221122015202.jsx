import React from 'react';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import styles from './NoteMakerPage.module.css';
export default function NoteMakerPage({ makeActive, handleActive }) {
  const [text, setText] = useState('');
  return (
    <section
      className={`${styles.container} ${
        makeActive ? styles.appear : styles.disappear
      }`}
    >
      <header className={styles.header}>
        <IconBtn handleClick={handleActive}>
          <GrClose />
        </IconBtn>
        <h1 className={styles.title}>쪽지 보내기</h1>

        <TextBtn text={'완료'} handleClick={() => console.log('click')} />
      </header>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </section>
  );
}
