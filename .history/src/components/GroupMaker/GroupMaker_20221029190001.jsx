import React from 'react';
import styles from './GroupMaker.module.css';

const MAX = Array.from({ length: 10 }, (v, i) => i + 1);
console.log(MAX);
export const GroupMaker = (props) => (
  <section className={styles.container}>
    <input type='text' placeholder='제목' />
    <select name='' id=''>
      <option value=''></option>
    </select>
  </section>
);
