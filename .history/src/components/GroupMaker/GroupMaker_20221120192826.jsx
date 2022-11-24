import React, { useState } from 'react';
import styles from './GroupMaker.module.css';
import { GrClose } from 'react-icons/gr';
import IconBtn from '../common/IconBtn/IconBtn';
import TextBtn from '../common/TextBtn/TextBtn';
const MAX = Array.from({ length: 10 }, (v, i) => i + 1);

export const GroupMaker = ({
  makeActive,
  onMakeActiveHandler,
  onMakeGroupHandler,
  types,
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
      <header className={styles.header}>
        <IconBtn handleClick={() => onMakeActiveHandler()}>
          <GrClose />
        </IconBtn>
        <h1 className={styles.title}>그룹 만들기</h1>
        <button onClick={() => onMakeGroupHandler(inputText, maxValue, type)}>
          만들기
        </button>
        <TextBtn
          text={'만들기'}
          handleClick={() => onMakeGroupHandler(inputText, maxValue, type)}
        />
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
      <select name='type' value={maxValue} onChange={onChange}>
        {types.map((t, i) => (
          <option key={i} value={t.type}>
            {t.koName}
          </option>
        ))}
      </select>
    </section>
  );
};
