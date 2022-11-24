import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpin from '../../components/common/loadingSpin/loadingSpin';
import TextBtn from '../../components/common/TextBtn/TextBtn';
import ItemSlider from '../../components/Trade/ItemSlider/ItemSlider';
import { useAuth } from '../../context/AuthContext';
import { useNoteContext } from '../../context/NoteContext';
import NoteMakerPage from '../NoteMakerPage/NoteMakerPage';
import styles from './TradeDetailPage.module.css';

export default function TradeDetailPage({ tradeService }) {
  const navigate = useNavigate();
  const { makeActive, setMakeActive, handleActive } = useNoteContext();
  const { setError } = useAuth();
  const { id } = useParams();
  const imgs = ['/logo192.png', '/logo192.png', '/logo192.png'];
  const [scrollToggle, setScrollToggle] = useState(false);
  const [item, setItem] = useState({
    id: 0,
    title: 'qwe',
    price: 1400,
    nickname: '박찬식',
    postImageUrls: [],
  });
  const [loading, setLoading] = useState(false);

  const HandleScroll = (e) => {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop === 0) {
      setScrollToggle(false);
    } else {
      setScrollToggle(true);
    }
  };

  const handleSend = async (message, auth_id) => {
    tradeService.postNote(item.id, message).catch(setError);
  };

  useEffect(() => {
    // 아이디를 이용하여 상품정복 가져오기
    // console.log(id);
    // setLoading(true);
    // tradeService
    //   .getPostedItemById(id)
    //   .then((data) => {
    //     console.log(data);
    //     return setItem({ ...data });
    //   })
    //   .finally(() => setLoading(false));
  }, [tradeService]);

  if (loading) return <LoadingSpin loading={loading} />;

  return (
    item && (
      <>
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
            <ItemSlider imgs={item.postImageUrls || []} />
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.textContent}>{item.description}</p>
          </section>
          <footer className={styles.footer}>
            <span className={styles.footer__price}>{`${item.price}원`}</span>

            <TextBtn text={'쪽지 보내기'} handleClick={() => handleActive()} />
          </footer>
        </main>
        <NoteMakerPage
          makeActive={makeActive}
          handleActive={handleActive}
          handleSend={handleSend}
        />
      </>
    )
  );
}
