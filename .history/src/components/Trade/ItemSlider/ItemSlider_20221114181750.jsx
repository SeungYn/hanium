import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './ItemSlider.module.css';

export default function ItemSlider({ imgs }) {
  const [sliders, setSliders] = useState([]);
  const sliderRef = useRef();
  useEffect(() => {
    if (imgs) {
      setSliders([...imgs.slice(0, 1), ...imgs, ...imgs.slice(-1)]);
    }
  }, [imgs]);
  return (
    <div className={styles.imgBorder}>
      <ul ref={sliderRef} className={styles.imgContainer}>
        {sliders.map((src, i) => (
          <img key={i} src={src} className={styles.img} />
        ))}
        <div className={styles.sliderBtn}>
          <span>이전</span>
          <span
            onClick={() => {
              console.log('click');
              sliderRef.current.style.left = `-1000px`;
            }}
          >
            다음
          </span>
        </div>
      </ul>
    </div>
  );
}
