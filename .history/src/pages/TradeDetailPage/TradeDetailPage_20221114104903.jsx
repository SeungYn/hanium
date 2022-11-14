import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <div className={styles.imgBorder}>
        {imgs && (
          <ul className={styles.imgContainer}>
            {imgs.map((src, i) => (
              <img key={i} src={src} className={styles.img} />
						))}
						<div></div>
          </ul>
        )}
      </div>
    </main>
  );
}
