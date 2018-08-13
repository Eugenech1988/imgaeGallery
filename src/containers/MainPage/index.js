import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dropper from 'components/DropZone';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import styles from 'styles/modules/main-page.module.scss';

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({});

@connect(mapStateToProps)
class MainPage extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className={styles.wrapper}>
        {!loading && <Loader/>}
        <Dropper/>
        <Gallery/>
      </div>
    );
  }
}

MainPage.propTypes = {
  loading: PropTypes.bool
};

export default MainPage;
