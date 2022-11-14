import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TradePage.module.css';

export default function TradePage() {
  const { type } = useParams();
  console.log(param);
  return <div>1</div>;
}
