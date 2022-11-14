import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemSlider from '../../components/Trade/ItemSlider/ItemSlider';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage() {
  const id = useParams();
  const imgs = ['/logo192.png', '/logo192.png', '/logo192.png'];
  console.log(id);

  const HandleScroll = (e) => {
    console.log(e);
  };

  if (imgs) {
    console.log(imgs);
  }
  useEffect(() => {
    // 아이디를 이용하여 상품정복 가져오기
  }, []);
  return (
    <main className={styles.body} onScroll={HandleScroll}>
      <header className={styles.header}>헤더</header>
      <section className={styles.middle}>
        <ItemSlider imgs={imgs} />
        <h2 className={styles.title}>장난감 팝니다.</h2>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
        <p className={styles.textContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          rem consequatur eaque corrupti, dolor aliquid aliquam itaque odio
          accusamus? Dolor accusamus cupiditate incidunt quas ab totam velit.
          Illum, blanditiis quis.
        </p>
      </section>
      <footer className={styles.footer}>
        <span className={styles.footer__price}></span>
        <button className={styles.footer__chatBtn}>채팅하기</button>
      </footer>
    </main>
  );
}
