import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Groups from '../../components/Groups/Groups';
import { useAuth } from '../../context/AuthContext';
import styles from './GroupSearchPage.module.css';

export default function GroupSearchPage({ groupService }) {
  const { error, setError } = useAuth();
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const inputTextRef = useRef();
  //무한스크롤
  const observer = useRef();
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(0);

  const HandlerGroupJoin = (groupId) => {
    groupService
      .joinGroup(groupId)
      .then((data) => {
        console.log(data);
        navigate('/chat', { state: { data } });
      })
      .catch((e) => setError(e));
  };

  const lastListElement = (node) => {
    console.log(node);

    observer.current && observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          console.log('마지막 리스트 ');
          if (hasMore) {
            groupService
              .getGroupBySearch(searchKeyword, offset)
              .then((data) => {
                if (data.length > 0) {
                  setGroups((g) => [...g, ...data]);
                  setHasMore((has) => true);
                  setOffset((offsets) => offsets + data.length);
                } else {
                  setHasMore((has) => false);
                }
              });
          }
        } else {
          console.log(123);
        }
      },
      { threshold: 0.95 }
    );
    node && observer.current.observe(node);
  };

  useEffect(() => {
    const setTime = setTimeout(() => {
      setLoading((l) => !l);
      groupService
        .getGroupBySearch(searchKeyword, 0)
        .then((data) => {
          console.log(data);
          setGroups([...data]);
          setHasMore((has) => true);
          setOffset((offsets) => data.length);
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

  //if (loading && groups.length === 0) return <div>1</div>;

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
