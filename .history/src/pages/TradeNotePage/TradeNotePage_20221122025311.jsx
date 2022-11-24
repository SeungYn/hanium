import React from 'react';
import { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import styles from './TradeNotePage.module.css';
export default function TradeNotePage() {
  const {
    state: { item },
  } = useLocation();
  const [notes, setNotes] = useState([]);
  return (
    <>
      <header className={styles.header}>
        <IconBtn handleClick={() => console.log(321)}>
          <MdOutlineArrowBackIosNew />
        </IconBtn>
        <h1 className={styles.htitle}>장터 등록하기</h1>
        <TextBtn text={'보내기'} handleClick={() => console.log(123)} />
      </header>
      <ul className={styles.items}>
        {notes && notes.map((item) => console.log(123))}
      </ul>
    </>
  );
}
