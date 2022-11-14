import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './ItemSlider.module.css';

export default function ItemSlider({ imgs }) {
  const [sliders, setSliders] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderRef = useRef();
  const widthRef = useRef();
  useEffect(() => {
    if (imgs) {
      setSliders([...imgs.slice(0, 1), ...imgs, ...imgs.slice(-1)]);
    }
  }, [imgs]);

  return (
    <div ref={widthRef} className={styles.imgBorder}>
      <ul ref={sliderRef} className={styles.imgContainer}>
        {sliders.map((src, i) => (
          <li key={i}>
            <img src={src} className={styles.img} />
          </li>
        ))}
      </ul>
      <div className={styles.sliderBtnContainer}>
        <span>이전</span>
        <span
          onClick={() => {
            const { width } = widthRef.current.getBoundingClientRect();
            console.log('click');
            sliderRef.current.style.left = -(currentIdx + 2) * width + 'px';
          }}
        >
          다음
        </span>
      </div>
    </div>
  );
}
