import React from 'react';
import { GrClose } from 'react-icons/gr';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';

export default function TradeNotePage() {
  return (
    <>
      <header>
        <IconBtn handleClick={() => console.log(321)}>
          <GrClose />
        </IconBtn>
        <h1 className={styles.htitle}>장터 등록하기</h1>
        <TextBtn text={'보내기'} handleClick={() => console.log(123)} />
      </header>
    </>
  );
}
