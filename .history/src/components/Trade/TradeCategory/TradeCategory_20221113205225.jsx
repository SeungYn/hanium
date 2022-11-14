import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
	console.log(tradeCategory);
	const navigate = useNavigate();
  return (
    <ul>
      {tradeCategory.map((item, i) => (
				<li key={i} onClick={()=> }>{item.typeKo}</li>
      ))}
    </ul>
  );
}
