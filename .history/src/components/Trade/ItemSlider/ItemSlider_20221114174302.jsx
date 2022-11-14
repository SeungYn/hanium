import React from 'react';

export default function ItemSlider({ imgs }) {
  return (
    <ul className={styles.imgContainer}>
      {imgs.map((src, i) => (
        <img key={i} src={src} className={styles.img} />
      ))}
      <div></div>
    </ul>
  );
}
