import React, { useEffect } from 'react';
import styles from './ItemSlider.module.css';

export default function ItemSlider({ imgs }) {
  useEffect(() => {}, []);
  return (
    <ul className={styles.imgContainer}>
      {imgs.map((src, i) => (
        <img key={i} src={src} className={styles.img} />
      ))}
      <div></div>
    </ul>
  );
}
