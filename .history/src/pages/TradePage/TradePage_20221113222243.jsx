import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import { useAuth } from '../../context/AuthContext';
import styles from './TradePage.module.css';

export default function TradePage({ type }) {
  const [makeActive, setMakeActive] = useState(false);
  const { error, setError } = useAuth();
  const [tradeItem, setTradeItem] = useState([
    {
      id: 0,
      src: '/logo192.png',
      title: '장난감 팝니다.',
      nickname: '유명수',
      price: '10000',
    },
    {
      id: 1,
      src: '/logo192.png',
      title: '장난감 팝니다.',
      nickname: '유명수',
      price: '10000',
    },
    {
      id: 2,
      src: '/logo192.png',
      title: '장난감 팝니다.',
      nickname: '유명수',
      price: '10000',
    },
    {
      id: 3,
      src: '/logo192.png',
      title: '장난감 팝니다.',
      nickname: '유명수',
      price: '10000',
    },
    {
      id: 4,
      src: '/logo192.png',
      title: '장난감 팝니다.',
      nickname: '유명수',
      price: '10000',
    },
  ]);
  const navigate = useNavigate();
  const HandleMoveToDetailpageById = (itemId) => {
    return navigate(`/trade/detail/${itemId}`);
  };

  useEffect(() => {
    console.log(type);
    //타입으로 목록가져오기
  }, []);

  return (
    <main className={styles.body}>
      <ul className={styles.items}>
        {tradeItem &&
          tradeItem.map((item) => (
            <TradeItem
              key={item.id}
              HandleMoveToDetailpageById={HandleMoveToDetailpageById}
              item={item}
            />
          ))}
      </ul>
    </main>
  );
}
