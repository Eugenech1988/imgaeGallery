import React, { Component } from 'react';
import styles from 'styles/modules/header.module.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {toggleHeader} from 'actions/toggleAction';
import Logo from 'components/Logo';
import Nav from 'components/Nav';

const mapStateToProps = state => ({
  isHeaderOpened: state.toggles.isHeaderOpened
});

const mapDispatchToProps = dispatch => ({
  toggleHeader: () => dispatch(toggleHeader())
});

@connect(mapStateToProps, mapDispatchToProps)
class Header extends Component {
  handleClick(e) {
    const {toggleHeader} = this.props;
    e.preventDefault();
    toggleHeader();
  }

  render() {
    const {isHeaderOpened} = this.props;
    return (
      <header className={cx(styles.header, {opened: isHeaderOpened})}>
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
  toggleHeader: PropTypes.func,
  isHeaderOpened: PropTypes.Bool
};

export default Header;
