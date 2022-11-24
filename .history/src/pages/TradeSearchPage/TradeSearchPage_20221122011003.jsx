import React, { useState } from 'react';
import styles from './TradeSearchPage.module.css';
import { MdNavigateBefore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import { useAuth } from '../../context/AuthContext';
export default function TradeSearchPage({ tradeService }) {
  const navigate = useNavigate();
  const { setError } = useAuth();
  const [title, setTitle] = useState('');
  const [tradeItem, setTradeItem] = useState([
    {
      id: 0,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: 'fsd',
    },
    {
      id: 1,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: 'fsd',
    },
    {
      id: 2,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: 'fsd',
    },
    {
      id: 3,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: 'fsd',
    },
  ]);
  const HandleMoveToDetailpageById = (itemId) => {
    return navigate(`/trade/detail/${itemId}`);
  };

  const handleSearch = () => {
    tradeService
      .getSearchItem(title)
      .then((data) => {
        return setTradeItem([...data]);
      })
      .catch(setError);
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconBtn handleClick={() => handleSearch()}>
          <BsSearch />
        </IconBtn>
      </form>
      <ul className={styles.items}>
        {tradeItem &&
          tradeItem.map((item) => (
            <TradeItem
              key={item.id}
              item={item}
              HandleMoveToDetailpageById={HandleMoveToDetailpageById}
            />
          ))}
      </ul>
    </section>
  );
}
