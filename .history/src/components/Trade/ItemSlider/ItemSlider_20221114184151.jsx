import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './ItemSlider.module.css';

export default function ItemSlider({ imgs }) {
  const [sliders, setSliders] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
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
          <li>
            <img key={i} src={src} className={styles.img} />
          </li>
        ))}
      </ul>
      <div className={styles.sliderBtnContainer}>
        <span>이전</span>
        <span
          onClick={() => {
            console.log('click');
            sliderRef.current.style.left = `-20rem`;
          }}
        >
          다음
        </span>
      </div>
    </div>
  );
}
