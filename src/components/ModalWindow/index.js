import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import iconClose from 'assets/icons/close.svg';
import styles from 'styles/modules/galleryModal.module.scss';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

@connect()
class ModalWindow extends Component {
  state = {
    isOpen: true
  };

  handleModalClick = ev => ev.stopPropagation();

  handleCloseModal = () => {
    const {onClose} = this.props;
    if (onClose) return onClose();
    return this.setState({ isOpen: false });
  };

  render() {
    const { imgLink } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        {isOpen &&
        <div className={styles.overlay} onClick={this.handleCloseModal}>
          <div className={styles.wrapper} onClick={this.handleModalClick}>
            <i className={styles.close} onClick={this.handleCloseModal}>
              <img src={iconClose} alt=''/>
            </i>
            <img src={imgLink} alt=''/>
          </div>
        </div>}
      </Fragment>
    );
  }
}

ModalWindow.propTypes = {
  onClose: PropTypes.func,
  imgLink: PropTypes.string
};

export default ModalWindow;
