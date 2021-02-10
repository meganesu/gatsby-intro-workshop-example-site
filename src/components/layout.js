import React from "react";
import { Link } from 'gatsby'

import styles from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={styles.container}>
      <title>{pageTitle}</title>
      <nav>
				<ul className={styles.navLinks}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</nav>
      <h1 className={styles.heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
