import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import styles from './TradeNoteListPage.module.css';
export default function TradeNoteListPage({ tradeService }) {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: 'qwe',
      price: 1400,
      nickname: '박찬식',
      postImageUrl: [],
    },
  ]);

  const handleMoveToNoteById = (id) => navigate(`/trade/note/${id}`);

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
