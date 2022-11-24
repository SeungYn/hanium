import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TradeItem from '../../components/Trade/TradeItem/TradeItem';
import { useAuth } from '../../context/AuthContext';
import styles from './TradeNoteListPage.module.css';
export default function TradeNoteListPage({ tradeService }) {
  const navigate = useNavigate();
  const { setError } = useAuth();
  const [notes, setNotes] = useState([]);

  const handleMoveToNoteById = (id, item) =>
    navigate(`/trade/note/${id}`, { state: { item } });

  useEffect(() => {
    tradeService
      .getNoteList()
      .then((data) => {
        console.log(data);
        return setNotes([...data]);
      })
      .catch(setError);
  }, [tradeService]);
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
