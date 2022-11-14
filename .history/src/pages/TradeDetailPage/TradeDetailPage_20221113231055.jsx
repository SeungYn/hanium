import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage() {
  const id = useParams();
  console.log(id);
  useEffect(() => {
    // 아이디를 이용하여 상품정복 가져오기
  }, []);
  return <main>123</main>;
}
