import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Dropper from 'components/DropZone';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import ModalPortal from 'containers/ModalPortal';
import styles from 'styles/modules/main-page.module.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  isGalleryModalOpen: state.toggles.isGalleryModalOpen
});

@connect(mapStateToProps)
class MainPage extends Component {
  render() {
    const { loading, isGalleryModalOpen } = this.props;
    return (
      <div className={styles.wrapper}>
        <CSSTransition
          in={!loading}
          classNames='fade'
          appear={true}
          enter={true}
          exit={true}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Loader/>
        </CSSTransition>
        <Dropper/>
        <Gallery/>
        <CSSTransition
          in={isGalleryModalOpen}
          classNames='fade'
          appear={true}
          enter={true}
          exit={true}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <ModalPortal/>
        </CSSTransition>
      </div>
    );
  }
}

MainPage.propTypes = {
  loading: PropTypes.bool,
  isGalleryModalOpen: PropTypes.bool
};

export default MainPage;
