import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups, HandlerGroupJoin }) {
  return (
    <ul className={styles.groups}>
      {groups &&
        groups.map((group) => (
          <li
            key={group.clubId}
            onClick={() => HandlerGroupJoin(group.clubId)}
            className={styles.group}
          >
            <p className={styles.title}>{group.clubName}</p>
            <p
              className={styles.personCount}
            >{`μΈμ μ : ${group.currentCount}/${group.maximumCount}`}</p>
          </li>
        ))}
    </ul>
  );
}
