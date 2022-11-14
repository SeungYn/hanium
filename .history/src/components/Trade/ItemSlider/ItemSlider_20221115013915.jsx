import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './ItemSlider.module.css';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export default function ItemSlider({ imgs }) {
  const [sliders, setSliders] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderRef = useRef();
  const widthRef = useRef();

  const HandleNextBtn = () => {
    console.log(currentIdx);
    const { width } = widthRef.current.getBoundingClientRect();
    if (currentIdx <= imgs.length - 1) {
      sliderRef.current.style.left = -(currentIdx + 2) * width + 'px';
      sliderRef.current.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === imgs.length - 1) {
      setTimeout(function () {
        sliderRef.current.style.left = -width + 'px';
        sliderRef.current.style.transition = `${0}s ease-out`;
      }, 500);

      return setCurrentIdx(0);
    }

    setCurrentIdx((i) => i + 1);
  };

  const HandlePrevBtn = () => {
    const { width } = widthRef.current.getBoundingClientRect();
    console.log(sliderRef.current.style.left);
    if (currentIdx >= 0) {
      sliderRef.current.style.left = -currentIdx * width + 'px';
      sliderRef.current.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0) {
      setTimeout(function () {
        sliderRef.current.style.left = -imgs.length * width + 'px';
        sliderRef.current.style.transition = `${0}s ease-out`;
      }, 500);
      return setCurrentIdx(imgs.length - 1);
    }
    setCurrentIdx((i) => i - 1);
  };

  useEffect(() => {
    if (imgs) {
      setSliders([...imgs.slice(0, 1), ...imgs, ...imgs.slice(-1)]);
      sliderRef.current.style.left = `-${
        widthRef.current.getBoundingClientRect().width
      }px`;
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
        <span
          onClick={() => {
            HandlePrevBtn();
          }}
        >
          이전
        </span>
        <span
          onClick={() => {
            HandleNextBtn();
          }}
        >
          다음
        </span>
      </div>
    </div>
  );
}
