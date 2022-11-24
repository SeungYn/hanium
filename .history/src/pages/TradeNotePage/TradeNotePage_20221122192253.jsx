import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import Note from '../../components/Trade/Note/Note';
import { useAuth } from '../../context/AuthContext';
import styles from './TradeNotePage.module.css';
import { v4 as uuid } from 'uuid';
import { useNoteContext } from '../../context/NoteContext';
import NoteMakerPage from '../NoteMakerPage/NoteMakerPage';

export default function TradeNotePage({ tradeService }) {
  const { setError, handleActive } = useAuth();
  const { makeActive } = useNoteContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([
    { id: 1, message: '123', sendStatus: 'receive' },
    { id: 2, message: '1234', sendStatus: 'receive' },
    {
      id: 3,
      message:
        '123dawhduiwahiudhwkahdjkwahdjkhwakjfhkjehwauifhaewifhewauifhew lhfuihgiurlhgiluaruhliarhuilruhilagfahjkfhraejghjkreahjkgreahkjghraekhguieaher',
      sendStatus: 'receive1',
    },
  ]);
  useEffect(() => {
    if (!state) {
      setError('잘못된 접근입니다.');
      return setTimeout(() => navigate(-1), 1000);
    }
    tradeService
      .getNoteById(state.item.id)
      .then((data) => setNotes([...data]))
      .catch(setError);
  }, [tradeService]);
  return (
    <>
      <header className={styles.header}>
        <IconBtn handleClick={() => navigate(-1)}>
          <MdOutlineArrowBackIosNew />
        </IconBtn>
        <h1 className={styles.htitle}>{state?.item?.title}</h1>
        <TextBtn text={'보내기'} handleClick={handleActive} />
      </header>
      <ul className={styles.items}>
        {notes &&
          notes.map((item) => {
            return <Note key={uuid()} note={item} />;
          })}
      </ul>
      <NoteMakerPage />
    </>
  );
}
