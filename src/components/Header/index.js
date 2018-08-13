import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/modules/header.module.scss'

import Logo from 'components/Logo';
import Login from 'components/Login'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.blockLeft}>
          <Logo/>
        </div>
        <div className={styles.blockRight}>
          <Login/>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
