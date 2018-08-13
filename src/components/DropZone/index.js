import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import styles from 'styles/modules/dropzone.module.scss';
import {uploadImage} from 'actions/imagesAction';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  uploadImage: (link, id) => dispatch(uploadImage(link, id))
});

@connect(null, mapDispatchToProps)
class Dropper extends Component {
  handleDrop(acceptedFiles) {
    const {uploadImage} = this.props;
    acceptedFiles.forEach(file => {
      uploadImage(file);
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Dropzone
          className={styles.dropZone}
          onDrop={::this.handleDrop}
        >
          <span className={styles.notify}>
            Place your files here or click to choose some
          </span>
        </Dropzone>
      </div>
    );
  }
}

Dropper.propTypes = {
  uploadImage: PropTypes.func
};

export default Dropper;
