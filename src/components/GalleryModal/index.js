import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import iconClose from 'assets/icons/close.svg';
import { closeGalleryModal } from 'actions/toggleAction';
import styles from 'styles/modules/galleryModal.module.scss';

const mapStateToProps = state => ({
  imgUrl: state.imgUrl.url
});

const mapDispatchToProps = dispatch => ({
  closeGalleryModal: () => dispatch(closeGalleryModal())
});

@connect(mapStateToProps, mapDispatchToProps)
class GalleryModal extends Component {

  handleModalClick = ev => ev.stopPropagation();

  handleCloseModal = () => {
    const { closeGalleryModal } = this.props;
    closeGalleryModal();
  };

  render() {
    const { imgUrl } = this.props;
    return (
      <Fragment>
        <div className={styles.overlay} onClick={this.handleCloseModal}>
          <div className={styles.wrapper} onClick={this.handleModalClick}>
            <i className={styles.close} onClick={this.handleCloseModal}>
              <img src={iconClose} alt=''/>
            </i>
            <img className={styles.image} src={imgUrl} alt=''/>
          </div>
        </div>
      </Fragment>
    );
  }
}

GalleryModal.propTypes = {
  onClose: PropTypes.func,
  imgUrl: PropTypes.string,
  closeGalleryModal: PropTypes.func,
  isGalleryModalOpen: PropTypes.bool
};

export default GalleryModal;
