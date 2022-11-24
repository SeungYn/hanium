import React from 'react';
import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import IconBtn from '../common/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';

export default function Header({ name }) {
  const navigate = useNavigate();

  const handleNavigate = (name) => {
    switch (name) {
      case '그룹':
      case '내 그룹':
        return navigate('/searchGroup');
      case '장터':
        return navigate('/trade/search');
      default:
        return;
    }
  };
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}</h3>
      <IconBtn handleClick={() => handleNavigate(name)}>
        <BsSearch />
      </IconBtn>
    </header>
  );
}
