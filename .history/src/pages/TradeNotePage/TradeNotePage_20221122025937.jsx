import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import IconBtn from '../../components/common/IconBtn/IconBtn';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import { useAuth } from '../../context/AuthContext';
import styles from './TradeNotePage.module.css';
export default function TradeNotePage() {
  const { setError } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (!state) {
      setError('잘못된 접근입니다.');
      return setTimeout(() => navigate(-1), 1000);
    }
  }, []);
  return (
    <>
      <header className={styles.header}>
        <IconBtn handleClick={() => console.log(321)}>
          <MdOutlineArrowBackIosNew />
        </IconBtn>
        <h1 className={styles.htitle}>{state?.note?.title}</h1>
        <TextBtn text={'보내기'} handleClick={() => console.log(123)} />
      </header>
      <ul className={styles.items}>
        {notes && notes.map((item) => console.log(123))}
      </ul>
    </>
  );
}
