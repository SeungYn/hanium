import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
  const navigate = useNavigate();
  return (
    <ul className={styles.container}>
      {tradeCategory.map((item, i) => (
        <li key={i} onClick={() => navigate(`/trade/${item.typeEn}`)}>
          {item.typeKo}
        </li>
      ))}
    </ul>
  );
}
