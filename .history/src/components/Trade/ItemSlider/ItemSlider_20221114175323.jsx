import React, { useEffect, useState } from 'react';
import styles from './ItemSlider.module.css';

export default function ItemSlider({ imgs }) {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    if (imgs) {
      setSliders([...imgs.slice(0, 1), ...imgs, ...imgs.slice(-1)]);
    }
  }, []);
  return (
    <ul className={styles.imgContainer}>
      {imgs.map((src, i) => (
        <img key={i} src={src} className={styles.img} />
      ))}
      <div></div>
    </ul>
  );
}
