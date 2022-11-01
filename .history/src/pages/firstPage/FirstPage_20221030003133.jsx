import React, { useEffect, useState } from 'react';
import { GroupCategory } from '../../components/GroupCategory/GroupCategory';
import { GroupMaker } from '../../components/GroupMaker/GroupMaker';
import { FaUserFriends, FaPen } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import Groups from '../../components/Groups/Groups';
import styles from './FirstPage.module.css';
import { useAuth } from '../../context/AuthContext';

const types = [
  { enName: 'study', koName: '공부', icon: <FaPen /> },
  { enName: 'hobby', koName: '취미', icon: <FiPlayCircle /> },
  { enName: 'friend', koName: '친구', icon: <FaUserFriends /> },
];
export default function FirstPage({ groupService }) {
  const [filterType, setFilterType] = useState(types[0]);
  const [makeActive, setMakeActive] = useState(false);
  const { error, setError } = useAuth();
  const [groups, setGroups] = useState([]);

  const HandlerGroupMake = (clubName, maximumCount, clubType) => {
    groupService
      .makeGroup(clubName, maximumCount, clubType)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => setError(e));
  };

  useEffect(() => {
    groupService
      .getGroupByType(filterType.enName)
      .then((data) => {
        setGroups([...data]);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <main className={styles.body}>
      <GroupCategory
        type={filterType}
        types={types}
        onTypeChange={(filter) => setFilterType(filter)}
      />
      <Groups groups={groups} />
      <button
        className={styles.makerBtn}
        onClick={() => setMakeActive((t) => !t)}
      >
        그룹 만들기
      </button>
      <GroupMaker
        makeActive={makeActive}
        onMakeActiveHandler={() => setMakeActive((t) => !t)}
      />
    </main>
  );
}
