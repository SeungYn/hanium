import React from 'react';
import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import IconBtn from '../common/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';

export default function Header({ name }) {
  const navigate = useNavigate();
  console.log(name);
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}</h3>
      <IconBtn
        handleClick={
          name === '그룹'
            ? () => {
                navigate('/searchGroup');
              }
            : (name === '장터' && ()=>navigate('/trade/trade'))</header>
        }
      >
        <BsSearch />
      </IconBtn>
    </header>
  );
}
