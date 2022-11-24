import React from 'react';
import { GrClose } from 'react-icons/gr';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import styles from './TradeNotePage.module.css';
export default function TradeNotePage() {
  return (
    <>
      <header className={styles.header}>
        <IconBtn handleClick={() => console.log(321)}>
          <MdOutlineArrowBackIosNew />
        </IconBtn>
        <h1 className={styles.htitle}>장터 등록하기</h1>
        <TextBtn text={'보내기'} handleClick={() => console.log(123)} />
      </header>
    </>
  );
}
