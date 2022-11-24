import React from 'react';
import styles from './TradeSearchPage.module.css';
export default function TradeSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='물건 제목' />
      </form>
    </section>
  );
}
