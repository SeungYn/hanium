import { DataArrayTwoTone } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import { TradeMaker } from '../../components/Trade/TradeMaker/TradeMaker';
import UpPageToggleBtn from '../../components/UpPageToggleBtn/UpPageToggleBtn';
import { useAuth } from '../../context/AuthContext';
import styles from './TradePage.module.css';

export default function TradePage({ tradeService, type }) {
  const [makeActive, setMakeActive] = useState(false);
  const { error, setError } = useAuth();
  const [loading, setLoading] = useState(false);
  const [tradeItem, setTradeItem] = useState([
    {
      id: 0,
      postImageUrl: '/logo192.png',
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

  const HandlePost = (form) => {
    console.log(form);
    tradeService.postItem(form).then((data) => console.log(data));
  };

  useEffect(() => {
    console.log(type);

    //타입으로 목록가져오기
    tradeService.getItemListByType(type).then((data) => {
      console.log(data);
      setTradeItem({ ...data });
    });
  }, [tradeService]);

  return (
    <>
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
        <UpPageToggleBtn
          name={'글쓰기'}
          HandleClick={() => setMakeActive((t) => !t)}
        />
      </main>
      <TradeMaker
        makeActive={makeActive}
        onMakeActiveHandler={() => setMakeActive((t) => !t)}
        HandlePost={HandlePost}
      />
    </>
  );
}
