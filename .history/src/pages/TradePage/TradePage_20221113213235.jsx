import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(type);
    //타입으로 목록가져오기
  }, []);

  return <main>1</main>;
}
