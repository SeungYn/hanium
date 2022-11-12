import React from 'react';
import styles from './Confirm.module.css';
export default function Confirm({ successCallback, failCallback, message }) {
  return (
    <main className={styles.container}>
      <section className={styles.alert__container}>
        <p className={styles.alert__header}>{message}</p>

        <div className={styles.btnGroup}>
          <button
            className={`${styles.btn} ${styles.yesBtn}`}
            onClick={() => {
              successCallback();
            }}
          >
            확인
          </button>
          <button
            className={`${styles.btn} ${styles.noBtn}`}
            onClick={() => {
              failCallback();
            }}
          >
            취소
          </button>
        </div>
      </section>
    </main>
  );
}
