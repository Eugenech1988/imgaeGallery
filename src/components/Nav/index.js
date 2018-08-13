import React, { Fragment } from 'react';

import styles from 'styles/modules/header.module.scss';

const Nav = props => {
    return (
      <nav className={styles.wrapper}>
        <button className={styles.signUpBtn}>
          <span>
            Sign Up
          </span>
        </button>
        <button className={styles.signInBtn}>
        <span>
          Sign In
        </span>
        </button>
        <input
          type="text"
          placeholder='Search'
          className={styles.search}/>
      </nav>
    );
};

export default Nav;
