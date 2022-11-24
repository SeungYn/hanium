import React from 'react';
import { wordSkip } from '../../../util/data';
import styles from './TradeItem.module.css';

export default function TradeItem({ item, HandleClick }) {
  console.log(item.title);
  return (
    <li className={styles.item} onClick={() => HandleClick(item.id, item)}>
      <img src={item.postImageUrl} className={styles.img} />
      <div className={styles.right}>
        <h1 className={styles.title}>{wordSkip(item.title)}</h1>
        <p className={styles.nickname}>{item.nickname}</p>
        <span className={styles.price}>{`${item.price}원`}</span>
      </div>
    </li>
  );
}
