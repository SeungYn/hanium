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
  { enName: 'hobby', koName: '취미', icon: <FaUserFriends /> },
  { enName: 'friend', koName: '친구', icon: <FiPlayCircle /> },
];
export default function FirstPage({ groupService }) {
  const [filterType, setFilterType] = useState(types[0]);
  const [makeActive, setMakeActive] = useState(false);
  const { error, setError } = useAuth();
  const [groups, setGroups] = useState([
    {
      id: 1,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 2,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 3,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 4,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 5,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 6,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 7,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 8,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 9,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 10,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 11,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 12,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 13,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 14,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 15,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 16,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
    {
      id: 17,
      clubName: '친구할 사람',
      currentCount: 1,
      maximumCount: 2,
      clubType: 'friend',
    },
  ]);

  useEffect(() => {
    groupService
      .getGroupByType(filterType)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    console.log(error);
  }
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
