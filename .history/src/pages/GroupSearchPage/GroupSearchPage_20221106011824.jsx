import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Groups from '../../components/Groups/Groups';
import { useAuth } from '../../context/AuthContext';
import styles from './GroupSearchPage.module.css';

export default function GroupSearchPage({ groupService }) {
  const { error, serError } = useAuth();
  const navigation = useNavigate();
  const [groups, setGroups] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const inputTextRef = useRef();
  //무한스크롤
  const observer = useRef();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (searchKeyword === '') {
      setGroups([]);

      return;
    }

    const setTime = setTimeout(() => {
      setLoading((l) => !l);
      groupService
        .getGroupBySearch(searchKeyword, 0)
        .then((data) => {
          console.log(data);
          console.log(offset.search);
          setGroups([...data]);
          setHasMore((has) => true);
          setOffset((offsets) => data.parties.length);
        })
        .catch(console.log)
        .finally(() => {
          console.log('finally');
          setLoading((l) => !l);
        });
      console.log('fetch Data');
    }, 1000);

    return () => {
      clearTimeout(setTime);
    };
  }, [searchKeyword, groupService]);

  return (
    <section className={styles.container}>
      <form className={styles.inputForm}>
        <input
          type='text'
          placeholder='파티 제목'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className={styles.inputText}
          ref={inputTextRef}
        />
      </form>
      <section className={styles.partyList1}>
        <Groups groups={groups} />
      </section>
    </section>
  );
}
