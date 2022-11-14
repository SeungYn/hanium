import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups, HandlerGroupJoin, lastListElement }) {
  return (
    <ul className={styles.groups}>
      {groups &&
        groups.map((group, i) => (
          <li
            key={group.clubId}
            onClick={() => HandlerGroupJoin(group.clubId)}
            className={styles.group}
            ref={
              i === groups.length - 1 && lastListElement
                ? lastListElement
                : null
            }
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
