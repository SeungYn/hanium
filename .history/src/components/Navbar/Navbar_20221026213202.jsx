import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
	return <nav	className={styles.nav}>
		<ul className={styles.navList}>
			<li>
				<NavLink to='/' style={({isActive}=> 'a')}></NavLink>
			</li>
		</ul>
	</nav>;
}
