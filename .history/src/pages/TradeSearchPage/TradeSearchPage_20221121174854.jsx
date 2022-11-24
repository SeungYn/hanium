import React from 'react';
import styles from './TradeSearchPage.module.css';
import { MdNavigateBefore } from 'react-icons/md';
import IconBtn from '../../components/common/IconBtn/IconBtn';
export default function TradeSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <IconBtn handleClick={() => console.log('click')}>
          <MdNavigateBefore />
        </IconBtn>
        <input type='text' placeholder='물건 제목' />
        <IconBtn handleClick={() => handleNavigate(name)}>
          <BsSearch />
        </IconBtn>
      </form>
    </section>
  );
}
