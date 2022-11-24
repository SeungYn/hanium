import React, { useState } from 'react';
import styles from './TradeSearchPage.module.css';
import { MdNavigateBefore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
export default function TradeSearchPage() {
  const navigate = useNavigate();
  const tradeItem = useState([
    {
      id: 0,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: 'fsd',
    },
  ]);
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <IconBtn handleClick={() => navigate(-1)}>
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
      <ul className={styles.items}>
        {tradeItem && tradeItem.map((item) => <TradeItem item={item} />)}
      </ul>
    </section>
  );
}
