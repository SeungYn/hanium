import React from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './TradePage.module.css';

export default function TradePage({ type }) {
  useEffect(() => {
    console.log(type);
    //타입으로 목록가져오기
  }, []);

  return <main>1</main>;
}
