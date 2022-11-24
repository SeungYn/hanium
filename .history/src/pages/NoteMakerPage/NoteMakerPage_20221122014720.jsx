import React from 'react';
import { GrClose } from 'react-icons/gr';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import styles from './NoteMakerPage.module.css';
export default function NoteMakerPage({ makeActive }) {
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
        <h1 className={styles.title}>그룹 만들기</h1>

        <TextBtn text={'완료'} handleClick={() => console.log('click')} />
      </header>
      dd
    </section>
  );
}
