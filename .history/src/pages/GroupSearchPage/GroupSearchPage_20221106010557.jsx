import React from 'react';

export default function GroupSearchPage({ groupService }) {
  const userContext = useAuth();
  const navigation = useNavigate();
  const [parties, setParties] = useState([]);
  const [searchParties, setSearchParties] = useState([]);
  const [offset, setOffset] = useState({ all: 0, search: 0 });
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const inputTextRef = useRef();
  //무한스크롤
  const observer = useRef();
  const [hasMore, setHasMore] = useState({ all: false, search: false });
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
