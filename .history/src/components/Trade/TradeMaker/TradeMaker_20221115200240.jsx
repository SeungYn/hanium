import React, { useState } from 'react';
import styles from './TradeMaker.module.css';

export const TradeMaker = ({
  makeActive,
  onMakeActiveHandler,
  onMakeTradeHandler,
}) => {
  const [inputText, setInputText] = useState('');
  const [maxValue, setMaxValue] = useState('최대 인원');
  const [type, setType] = useState('');

  const onChange = (e) => {
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
    <section
      className={`${styles.container} ${
        makeActive ? styles.appear : styles.disappear
      }`}
    >
      <header>
        <button onClick={() => onMakeActiveHandler()}>X아이콘</button>
      </header>
      <input
        type='text'
        name='text'
        placeholder='제목'
        onChange={onChange}
        value={inputText}
      />

      <button onClick={() => console.log(123)}>만들기</button>
    </section>
  );
};
