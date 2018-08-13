import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from 'styles/modules/header.module.scss';

const Login = props => {
    return (
      <Fragment>
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
      </Fragment>
    );
};

Login.propTypes = {};

export default Login;
