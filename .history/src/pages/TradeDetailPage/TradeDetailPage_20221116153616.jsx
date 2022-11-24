import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import ItemSlider from '../../components/Trade/ItemSlider/ItemSlider';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const imgs = ['/logo192.png', '/logo192.png', '/logo192.png'];
  const [scrollToggle, setScrollToggle] = useState(false);

  const HandleScroll = (e) => {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop === 0) {
      setScrollToggle(false);
    } else {
      setScrollToggle(true);
    }
  };

  if (imgs) {
    console.log(imgs);
  }
  useEffect(() => {
    // 아이디를 이용하여 상품정복 가져오기
    console.log(id);
  }, []);
  return (
    <main className={`${styles.body} `} onScroll={HandleScroll}>
      <header
        className={`${styles.header} ${
          scrollToggle ? styles.header__scroll : ''
        }`}
      >
        <span onClick={() => navigate(-1)}>
          <MdOutlineArrowBackIosNew className={styles.icon} />
        </span>
      </header>
      <section className={styles.middle}>
        <ItemSlider imgs={imgs} />
        <h2 className={styles.title}>장난감 팝니다.</h2>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
      </section>
      <footer className={styles.footer}>
        <span className={styles.footer__price}>{`${100000}원`}</span>
        <button className={styles.footer__chatBtn}>채팅하기</button>
      </footer>
    </main>
  );
}
