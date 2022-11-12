import React from 'react';

export default function GroupSearchPage() {
  return (
    <section className={styles.container}>
      <form className={styles.inputForm}>
        <input
          type='text'
          placeholder='파티 제목'
          value={searchKeyword}
          onChange={handlerChange}
          className={styles.inputText}
          onFocus={handelerScrollHeightSave}
          ref={inputTextRef}
        />
      </form>
      <section className={styles.partyList1}>
        <PartyList
          partyList={searchKeyword ? searchParties : parties}
          partyType={searchKeyword ? 'search' : 'all'}
          onJoinParty={handleJoin}
          lastListElement={lastListElement}
          onScrollSave={handelerScrollHeightSave}
          ref={partyItemScrollTopRef}
        />
      </section>
    </section>
  );
}
