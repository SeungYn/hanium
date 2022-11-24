import React from 'react';
import styles from './TradeSearchPage.module.css';
export default function TradeSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='그룹 제목'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className={styles.inputText}
          ref={inputTextRef}
        />
      </form>

      <Groups
        groups={groups}
        HandlerGroupJoin={HandlerGroupJoin}
        lastListElement={lastListElement}
      />
    </section>
  );
}
