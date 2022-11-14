import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage() {
  const id = useParams();
  console.log(id);
  return <div>123</div>;
}
