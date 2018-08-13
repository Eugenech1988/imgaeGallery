import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dropper from 'components/DropZone';
import Gallery from 'components/Gallery';
import styles from 'styles/modules/main-page.module.scss';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

@connect()
class MainPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Dropper/>
        <Gallery/>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
