import React, { useState } from 'react';
import { useEffect } from 'react';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import styles from './TradeNoteListPage.module.css';
export default function TradeNoteListPage({ tradeService }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {}, [tradeService]);
  return (
    <main className={styles.container}>
      <ul className={styles.items}>
        {tradeItem &&
          tradeItem.map((item) => (
            <TradeItem
              key={item.id}
              HandleClick={HandleMoveToDetailpageById}
              item={item}
            />
          ))}
      </ul>
    </main>
  );
}
