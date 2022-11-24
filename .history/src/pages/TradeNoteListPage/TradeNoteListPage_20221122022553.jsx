import React, { useState } from 'react';
import { useEffect } from 'react';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import styles from './TradeNoteListPage.module.css';
export default function TradeNoteListPage({ tradeService }) {
  const [notes, setNotes] = useState([]);

  const handleMoveToNoteById = () => {
    console.log('move');
  };

  useEffect(() => {}, [tradeService]);
  return (
    <>
      <ul className={styles.items}>
        {notes &&
          notes.map((item) => (
            <TradeItem
              key={item.id}
              HandleClick={handleMoveToNoteById}
              item={item}
            />
          ))}
      </ul>
    </>
  );
}
