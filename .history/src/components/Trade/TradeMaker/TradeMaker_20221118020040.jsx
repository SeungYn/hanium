import React, { useRef, useState } from 'react';
import styles from './TradeMaker.module.css';
import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';

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
        const imgUrls = [];
        [...files].forEach((f) => {
          const url = URL.createObjectURL(f);
          imgUrls.push(url);
        });
        setPrevImgs([...imgUrls]);
        return setForm((f) => ({ ...f, images: [...files] }));
      case 'price':
        return setForm((f) => ({ ...f, price: value }));
      default:
        return;
    }
  };

  const HandlefileBtnClick = (e) => {
    e.preventDefault();
    fileBtnRef.current.click();
  };

  const submit = (e) => {
    e.preventDefault();
    HandlePost(form);
  };
  //trade(거래), rental(대여), share(무료나눔)
  return (
    <main
      className={`${styles.container} ${
        makeActive ? styles.appear : styles.disappear
      }`}
    >
      <header>
        <IconContext.Provider value={{ className: styles.icon }}>
          <button onClick={() => onMakeActiveHandler()}>X아이콘</button>
        </IconContext.Provider>
        <button onClick={submit}>만들기</button>
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
          type='text'
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
      </footer>
      <span onClick={HandlefileBtnClick}>아이콘</span>
    </main>
  );
};
