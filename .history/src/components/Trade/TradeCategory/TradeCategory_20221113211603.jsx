import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
  const navigate = useNavigate();
  return (
    <ul className={styles.categories}>
      {tradeCategory.map((item, i) => (
        <li
          key={i}
          className={styles.category}
          onClick={() => navigate(`/trade/${item.typeEn}`)}
        >
          {item.typeKo}
        </li>
      ))}
    </ul>
  );
}
