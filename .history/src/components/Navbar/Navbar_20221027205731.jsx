import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsList, BsPerson } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const contents = [
  { path: '/', name: '홈', iconComponent: <AiOutlineHome /> },
  { path: '/group', name: '그룹', iconComponent: <BsList /> },
  { path: '/myGroup', name: '내 그룹', iconComponent: <BsList /> },
  { path: '/trade', name: '장터', iconComponent: <BsList /> },
  { path: '/myInfo', name: '내 정보', iconComponent: <BsPerson /> },
];

export default function Navbar() {
  //버튼 클릭시 넷바 위로 나타내기
  const navMenuRef = useRef();
  const btnRef = useRef();
  const [navToggle, setNavToggle] = useState(false);
  const handleBtn = (e) => {
    setNavToggle((t) => {
      if (t) btnRef.current.style.transform = 'rotate(0deg)';
      else btnRef.current.style.transform = 'rotate(30deg)';

      return !t;
    });

    console.log(e);
  };

  const test = <BsList />;
  console.log(navToggle ? styles.navAppear : styles.navDisappear);
  return (
    <nav className={styles.nav}>
      <IconContext.Provider value={{ className: styles.reactIcon }}>
        <div
          ref={navMenuRef}
          className={`${styles.navMenu} ${
            navToggle ? styles.navAppear : styles.navDisappear
          }`}
        >
          {contents.map(({ path, name, iconComponent }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.link}`
                  : `${styles.unactive} ${styles.link}`
              }
            >
              {iconComponent}
              <span className={styles.text}>{name}</span>
            </NavLink>
          ))}
        </div>
      </IconContext.Provider>
      <button ref={btnRef} className={styles.btn} onClick={handleBtn}>
        <BsList />
      </button>
    </nav>
  );
}

{
  /* <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <AiOutlineHome />
            <span className={styles.text}>홈</span>
          </NavLink>

          <NavLink
            to='/1'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <BsList />

            <span className={styles.text}>미정</span>
          </NavLink>

          <NavLink
            to='/2'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <IoChatbubbleOutline />
            <span className={styles.text}>그룹 채팅</span>
          </NavLink>

          <NavLink
            to='/4'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <IoChatbubbleOutline />
            <span className={styles.text}>장터 채팅</span>
          </NavLink>

          <NavLink
            to='/3'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <BsPerson />
            <span className={styles.text}>내정보</span>
          </NavLink> */
}
