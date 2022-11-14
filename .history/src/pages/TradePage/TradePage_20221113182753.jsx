import React from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './TradePage.module.css';

export default function TradePage({ type }) {
  useEffect(() => {
    console.log(type);
  }, []);
  return <div>1</div>;
}
