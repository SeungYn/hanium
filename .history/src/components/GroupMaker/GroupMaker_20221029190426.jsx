import React, { useState } from 'react';
import styles from './GroupMaker.module.css';

const MAX = Array.from({ length: 10 }, (v, i) => i + 1);
console.log(MAX);
export const GroupMaker = (props) => {
  const [inputText, setInputText] = useState('');
  const [maxValue, setMaxValue] = useState(1);

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
    <section className={styles.container}>
      <input
        type='text'
        name='text'
        placeholder='제목'
        onChange={onChange}
        value={inputText}
      />
      <select name='maxValue' id='' value={maxValue}>
        <option value=''></option>
      </select>
    </section>
  );
};
