import React, { Component } from 'react';
import styles from 'styles/modules/header.module.scss';

import Logo from 'components/Logo';
import Nav from 'components/Nav';

class Header extends Component {
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <header className={styles.header}>
        <button
          className={styles.burger}
          onClick={::this.handleClick}
        />
        <Logo/>
        <Nav/>
      </header>
    );
  }
}

export default Header;
