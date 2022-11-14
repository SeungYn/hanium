import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemSlider from '../../components/Trade/ItemSlider/ItemSlider';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage() {
  const id = useParams();
  const imgs = ['/logo192.png', '/logo192.png', '/logo192.png'];
  console.log(id);
  if (imgs) {
    console.log(imgs);
  }
  useEffect(() => {
    // 아이디를 이용하여 상품정복 가져오기
  }, []);
  return (
    <main className={styles.body}>
      <ItemSlider imgs={imgs} />
      <h2 className={styles.title}>장난감 팝니다.</h2>
    </main>
  );
}
