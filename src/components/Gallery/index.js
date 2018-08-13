import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GalleryItem from './item';
import styles from 'styles/modules/gallery.module.scss';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

@connect()
class Gallery extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.galleryList}>
          <GalleryItem
            itemSrc='https://i.imgur.com/c1Ewcw9.jpg'
          />
          <GalleryItem
            itemSrc='https://i.imgur.com/XuQ5nmC.jpg'
          />
          <GalleryItem
            itemSrc='https://i.imgur.com/nOIAsz8.jpg'
          />
          <GalleryItem
            itemSrc='https://i.imgur.com/nHOFCKG.jpg'
          />
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {};

export default Gallery;
