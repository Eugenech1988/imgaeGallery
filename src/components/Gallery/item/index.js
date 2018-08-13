import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'styles/modules/gallery.module.scss';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

@connect()
class GalleryItem extends Component {
  render() {
    const { itemLink, itemSrc } = this.props;
    return (
      <li className={styles.galleryItem}>
        <a href={itemLink} className={styles.galleryLink}>
          <img src={itemSrc} alt="" className={styles.galleryImg}/>
        </a>
      </li>
    );
  }
}

GalleryItem.propTypes = {
  itemLink: PropTypes.string,
  itemSrc: PropTypes.string
};

export default GalleryItem;
