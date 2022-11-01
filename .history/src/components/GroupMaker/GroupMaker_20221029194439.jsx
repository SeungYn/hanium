import React, { useState } from 'react';
import styles from './GroupMaker.module.css';

const MAX = Array.from({ length: 10 }, (v, i) => i + 1);

export const GroupMaker = ({
  makeActive,
  onMakeActiveHandler,
  onMakeGroupHandler,
}) => {
  const [inputText, setInputText] = useState('');
  const [maxValue, setMaxValue] = useState('최대 인원');

  const onChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'text':
        return setInputText(value);
      case 'maxValue':
        return setMaxValue(value);
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
      <select
        name='maxValue'
        value={maxValue}
        placeholder='최대 인원'
        onChange={onChange}
      >
        <option value='최대 인원' disabled>
          최대 인원
        </option>
        {MAX.map((count, i) => (
          <option key={i} value={count}>
            {count}명
          </option>
        ))}
      </select>
      <button>만들기</button>
    </section>
  );
};
