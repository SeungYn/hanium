import { DataArrayTwoTone } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TradeCategory from '../../components/Trade/TradeCategory/TradeCategory';
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
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: [],
    },
  ]);
  const navigate = useNavigate();
  const HandleMoveToDetailpageById = (itemId) => {
    return navigate(`/trade/detail/${itemId}`);
  };

  const HandlePost = (form) => {
    console.log(form);
    tradeService
      .postItem(form)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log(type);

    //타입으로 목록가져오기
    tradeService.getItemListByType(type).then((data) => {
      console.log(data);
      setTradeItem([...data]);
    });
  }, [tradeService, type]);

  return (
    <>
      <main className={styles.body}>
        <TradeCategory />
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
