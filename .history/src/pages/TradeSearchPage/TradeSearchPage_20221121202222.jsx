import React from 'react';
import styles from './TradeSearchPage.module.css';
import { MdNavigateBefore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import IconBtn from '../../components/common/IconBtn/IconBtn';
export default function TradeSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <IconBtn handleClick={() => console.log('click')}>
          <MdNavigateBefore />
        </IconBtn>
        <input
          type='text'
          placeholder='물건 제목'
          className={styles.inputText}
        />
        <IconBtn handleClick={() => console.log('click2')}>
          <BsSearch />
        </IconBtn>
      </form>
    </section>
  );
}
