import React from 'react';
import { timeFormat, wordSkip } from '../../../util/data';
import styles from './TradeItem.module.css';

export default function TradeItem({ item, HandleClick }) {
  console.log(item.title);
  return (
    <li className={styles.item} onClick={() => HandleClick(item.id, item)}>
      <img src={item.postImageUrl} className={styles.img} />
      <div className={styles.right}>
        <div className={styles.header}>
          <h1 className={styles.title}>{wordSkip(item.title)}</h1>
          <span className={styles.time}>{`${timeFormat(item.createTime)[0]} ${
            timeFormat(item.createTime)[1]
          }`}</span>
        </div>
        <p className={styles.nickname}>{item.nickname}</p>
        <span className={styles.price}>{`${item.price}원`}</span>
      </div>
    </li>
  );
}
