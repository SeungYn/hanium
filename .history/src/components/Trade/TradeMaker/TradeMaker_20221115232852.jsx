import React, { useState } from 'react';
import styles from './TradeMaker.module.css';
import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';

export const TradeMaker = ({
  makeActive,
  onMakeActiveHandler,
  onMakeTradeHandler,
}) => {
  const [inputText, setInputText] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    images: [],
  });

  const onChange = (e) => {
    const { value, name, files } = e.target;
    switch (name) {
      case 'title':
        return setForm((f) => ({ ...f, title: value }));
      case 'description':
        return setForm((f) => ({ ...f, description: value }));
      case 'files':
        return setForm((f) => ({ ...f, imgs: [...files] }));
      default:
        return;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
      <form>
        <input
          type='text'
          name='title'
          placeholder='제목'
          onChange={onChange}
          value={form.title}
        />

        <textarea
          name='description'
          placeholder='내용'
          onChange={onChange}
          value={form.description}
          style={{ resize: 'none' }}
        />
        <input
          type='file'
          name='files'
          onChange={onChange}
          multiple
          accept='image/*'
        />
      </form>
    </main>
  );
};
