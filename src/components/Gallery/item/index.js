import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'styles/modules/gallery.module.scss';
import { openGalleryModal } from 'actions/toggleAction';
import { setImageUrl } from 'actions/imageUrlAction';

const mapDispatchToProps = dispatch => ({
  openGalleryModal: () => dispatch(openGalleryModal()),
  setImageUrl: (url) => dispatch(setImageUrl(url))
});

@connect(null, mapDispatchToProps)
class GalleryItem extends Component {
  handleClick(e) {
    const { openGalleryModal, setImageUrl, itemSrc } = this.props;
    e.preventDefault();
    setImageUrl(itemSrc);
    openGalleryModal();
  }

  render() {
    const { itemLink, itemSrc } = this.props;
    return (
      <li className={styles.galleryItem}>
        <a href={itemLink} className={styles.galleryLink}>
          <img src={itemSrc} onClick={::this.handleClick} alt="" className={styles.galleryImg}/>
        </a>
      </li>
    );
  }
}

GalleryItem.propTypes = {
  itemLink: PropTypes.string,
  itemSrc: PropTypes.string,
  setImageUrl: PropTypes.func,
  openGalleryModal: PropTypes.func
};

export default GalleryItem;
