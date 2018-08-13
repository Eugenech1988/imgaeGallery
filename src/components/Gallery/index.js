import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GalleryItem from './item';
import styles from 'styles/modules/gallery.module.scss';

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({});

@connect(mapStateToProps)
class Gallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className={styles.wrapper}>
        <ul className={styles.galleryList}>
          {images && images.map(image => (
            <GalleryItem
              key={image.id}
              itemLink={image.link}
              itemSrc={image.link}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
