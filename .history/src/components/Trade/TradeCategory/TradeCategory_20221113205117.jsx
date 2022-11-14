import React from 'react';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
  console.log(tradeCategory);
  return (
    <ul>
      {tradeCategory.map((item, i) => (
        <li key={i}>{item.typeKo}</li>
      ))}
    </ul>
  );
}
