import React, { Component } from 'react';
import styles from 'styles/modules/header.module.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {toggleHeader} from 'actions/toggleAction';
import Logo from 'components/Logo';
import Nav from 'components/Nav';

const mapDispatchToProps = dispatch => ({
  toggleHeader: () => dispatch(toggleHeader())
});

@connect(null, mapDispatchToProps)
class Header extends Component {
  handleClick(e) {
    const {toggleHeader} = this.props;
    e.preventDefault();
    toggleHeader();
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

Header.propTypes = {
  toggleHeader: PropTypes.func
};

export default Header;
