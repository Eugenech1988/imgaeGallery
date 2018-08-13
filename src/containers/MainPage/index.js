import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Dropper from 'components/DropZone';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import ModalPortal from 'containers/ModalPortal';
import {setImagesFromStore} from 'actions/imagesAction';
import styles from 'styles/modules/main-page.module.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  isGalleryModalOpen: state.toggles.isGalleryModalOpen
});

const mapDispatchToProps = dispatch => ({
  setImagesFromStore: (urls) => dispatch(setImagesFromStore(urls))
});

@connect(mapStateToProps, mapDispatchToProps)
class MainPage extends Component {
  componentDidMount() {
    const { setImagesFromStore } = this.props;
    const imagesList = JSON.parse(localStorage.getItem('galleryImagesUrls') || '[]');
    setImagesFromStore(imagesList);
  }
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
  isGalleryModalOpen: PropTypes.bool,
  setImagesFromStore: PropTypes.func
};

export default MainPage;
