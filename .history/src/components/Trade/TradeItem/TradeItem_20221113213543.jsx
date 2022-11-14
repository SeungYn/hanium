import React from 'react';
import styles from './TradeItem.module.css';

export default function TradeItem({ item }) {
  return (
    <li className={styles.item}>
      <img src={item.src} className={styles.img} />
      <div className={styles.right}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.nickname}>{item.nickname}</p>
        <span className={styles.price}>{`${item.price}원`}</span>
      </div>
    </li>
  );
}
