import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups, HandlerGroupJoin }) {
  return (
    <ul className={styles.groups}>
      {groups.map((group) => (
        <li
          key={group.clubId}
          onClick={() => HandlerGroupJoin(group.clubId)}
          className={styles.group}
        >
          <p className={styles.title}>{group.clubName}</p>
          <p
            className={styles.personCount}
          >{`인원 수 : ${group.currentCount}/${group.maximumCount}`}</p>
        </li>
      ))}
    </ul>
  );
}
