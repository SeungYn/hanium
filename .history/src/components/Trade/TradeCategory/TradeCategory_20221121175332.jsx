import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { tradeCategory } from '../../../meta/trade/tradeMetaData';
import styles from './TradeCategory.module.css';

export default function TradeCategory() {
  const navigate = useNavigate();
  return (
    <nav className={styles.categories}>
      {tradeCategory.map((item, i) => (
        <NavLink
          key={i}
          to={`/trade/${item.typeEn}`}
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.category}`
              : `${styles.unactive} ${styles.category}`
          }
        >
          {item.typeKo}
        </NavLink>
      ))}
    </nav>
  );
}
