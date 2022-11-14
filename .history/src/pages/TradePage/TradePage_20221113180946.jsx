import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './TradePage.module.css';

export default function TradePage() {
  const test = useLocation();
  const test2 = useParams();
  console.log(test);
  console.log(test2);
  return <div>1</div>;
}
