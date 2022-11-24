import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
  const navigate = useNavigate();
  return (
    <nav className={styles.categories}>
      {tradeCategory.map((item, i) => (
        <div
          key={i}
          className={styles.category}
          onClick={() => navigate(`/trade/${item.typeEn}`)}
        >
          {item.typeKo}
        </div>
      ))}
    </nav>
  );
}
