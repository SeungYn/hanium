import React, { useEffect, useState } from 'react';
import { GroupCategory } from '../../components/GroupCategory/GroupCategory';
import { GroupMaker } from '../../components/GroupMaker/GroupMaker';
import { FaUserFriends, FaPen } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import Groups from '../../components/Groups/Groups';
import styles from './FirstPage.module.css';

const types = [
  { enName: 'study', koName: '공부', icon: <FaPen /> },
  { enName: 'hobby', koName: '취미', icon: <FaUserFriends /> },
  { enName: 'friend', koName: '친구', icon: <FiPlayCircle /> },
];
export default function FirstPage({ groupService }) {
  const [filterType, setFilterType] = useState(types[0]);
  const [makeActive, setMakeActive] = useState(false);
  const [groups, setGroups] = useState([
    {
      id: 1,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
  ]);

  useEffect(() => {
    console.log(filterType);
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
