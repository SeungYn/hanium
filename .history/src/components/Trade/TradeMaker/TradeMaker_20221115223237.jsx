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
  const [initialForm, setInitialForm] = useState({
    title: '',
    content: '',
    imgs: [],
  });
  const [maxValue, setMaxValue] = useState('최대 인원');

  const [type, setType] = useState('');

  const onChange = (e) => {
    console.log(e.target.files);
    const { value, name } = e.target;
    switch (name) {
      case 'text':
        return setInputText(value);
      case 'maxValue':
        return setMaxValue(value);
      case 'type':
        return setType(value);
      default:
        return;
    }
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
      </header>
      <form>
        <input
          type='text'
          name='text'
          placeholder='제목'
          onChange={onChange}
          value={inputText}
        />
        <input
          type='text'
          name='text'
          placeholder='내용'
          onChange={onChange}
          value={inputText}
        />
        <input type='file' onChange={onChange} multiple />
      </form>

      <button onClick={() => console.log(123)}>만들기</button>
    </main>
  );
};
