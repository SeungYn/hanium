import React, { useRef, useState } from 'react';
import styles from './TradeMaker.module.css';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { useEffect } from 'react';
import IconBtn from '../../common/IconBtn/IconBtn';
import TextBtn from '../../common/TextBtn/TextBtn';

export const TradeMaker = ({ makeActive, onMakeActiveHandler, HandlePost }) => {
  const [tradeType, setTradeType] = useState('trade');
  const textareaRef = useRef(null);
  const fileBtnRef = useRef(null);
  const [prevImgs, setPrevImgs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    dealType: 'trade',
    price: '',
    images: [],
  });

  const onChange = (e) => {
    const { value, name, files } = e.target;
    switch (name) {
      case 'type':
        setForm((f) => ({ ...f, dealType: value }));
        return setTradeType(value);
      case 'title':
        return setForm((f) => ({ ...f, title: value }));
      case 'description':
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        return setForm((f) => ({ ...f, description: value }));
      case 'files':
        prevImageClear();

        const imgUrls = [];
        [...files].forEach((f) => {
          const url = URL.createObjectURL(f);
          imgUrls.push(url);
        });
        setPrevImgs([...imgUrls]);
        return setForm((f) => ({ ...f, images: [...files] }));
      case 'price':
        console.log(value.toString().test('/[0-9]/g'));
        return setForm((f) => ({ ...f, price: value }));
      default:
        return;
    }
  };

  const prevImageClear = () => {
    [...prevImgs].forEach((img) => URL.revokeObjectURL(img));
    setPrevImgs([]);
  };

  //미리보기 이미지 하나 삭제
  const prevImgageDelete = (target) => {
    setPrevImgs((imgs) => {
      const files = imgs.filter((i) => i != target);
      return [...files];
    });
    setForm((form) => {
      const files = form.images.filter((i) => i != target);
      return { ...form, images: files };
    });
    URL.revokeObjectURL(target);
  };

  const HandlefileBtnClick = (e) => {
    e.preventDefault();
    fileBtnRef.current.click();
  };

  const submit = (e) => {
    e.preventDefault();
    HandlePost(form);
  };

  useEffect(() => {
    return () => {
      prevImageClear();
    };
  }, []);
  //trade(거래), rental(대여), share(무료나눔)
  return (
    <main
      className={`${styles.container} ${
        makeActive ? styles.appear : styles.disappear
      }`}
    >
      <header>
        <IconBtn
          handleClick={() => {
            setForm({
              title: '',
              description: '',
              dealType: 'trade',
              price: '',
              images: [],
            });
            prevImageClear();
            onMakeActiveHandler();
          }}
        >
          <GrClose />
        </IconBtn>
        <h1 className={styles.htitle}>장터 등록하기</h1>
        <TextBtn text={'등록하기'} handleClick={submit} />
      </header>
      <form className={styles.form}>
        <div className={styles.checkBox}>
          <label>
            <input
              type='radio'
              name='type'
              value='trade'
              checked={'trade' === tradeType}
              onChange={onChange}
            />
            거래
          </label>
          <label>
            <input
              type='radio'
              name='type'
              value='rental'
              onChange={onChange}
            />
            대여
          </label>
          <label>
            <input type='radio' name='type' value='share' onChange={onChange} />
            나눔
          </label>
        </div>
        <input
          type='text'
          name='title'
          placeholder='제목'
          onChange={onChange}
          value={form.title}
          className={styles.title}
        />
        <input
          type='number'
          name='price'
          placeholder='가격'
          onChange={onChange}
          value={form.price}
          className={styles.title}
        />

        <textarea
          ref={textareaRef}
          name='description'
          placeholder='내용'
          onChange={onChange}
          value={form.description}
          style={{ resize: 'none' }}
          className={styles.textarea}
          rows={1}
        />
      </form>

      <ul className={styles.prevImgs}>
        {prevImgs.map((img) => (
          <li key={img} className={styles.prevImg}>
            <span
              className={styles.imgDelete}
              onClick={() => prevImgageDelete(img)}
            >
              X
            </span>
            <img src={img} className={styles.Img} />
          </li>
        ))}
      </ul>

      <footer>
        <input
          ref={fileBtnRef}
          type='file'
          name='files'
          className={styles.fileBtn}
          onChange={onChange}
          multiple
          accept='image/*'
        />
        <span onClick={HandlefileBtnClick}>아이콘</span>
      </footer>
    </main>
  );
};
