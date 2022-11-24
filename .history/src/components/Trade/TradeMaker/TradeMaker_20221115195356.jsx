import React, { useState } from 'react';
import styles from './TradeMaker.module.css';

export const TradeMaker = ({
  makeActive,
  onMakeActiveHandler,
  onMakeTradeHandler,
}) => {
  const [inputText, setInputText] = useState('');
  const [maxValue, setMaxValue] = useState('최대 인원');
  const [type, setType] = useState(types[0].type);

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

      <button onClick={() => onMakeGroupHandler(inputText, maxValue, type)}>
        만들기
      </button>
    </section>
  );
};
