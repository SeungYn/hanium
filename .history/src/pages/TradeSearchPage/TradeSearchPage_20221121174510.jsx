import React from 'react';
import styles from './TradeSearchPage.module.css';
import { MdOutlineNavigateBefore } from 'react-icons/md';
import IconBtn from '../../components/common/IconBtn/IconBtn';
export default function TradeSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <IconBtn handleClick={() => console.log('click')}>
          <MdOutlineNavigateBefore />
        </IconBtn>
        <input type='text' placeholder='물건 제목' />
      </form>
    </section>
  );
}
