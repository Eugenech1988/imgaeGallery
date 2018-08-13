import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

@connect()
class GalleryModal extends Component {
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
        <div className={style.wrapper} onClick={this.handleCloseModal}>
          <div className='modal-window' onClick={this.handleModalClick}>
            <i className='modal-window-close icon-close no-print' onClick={this.handleCloseModal}/>
          </div>
        </div>}
      </Fragment>
    );
  }
}

GalleryModal.propTypes = {
  onClose: PropTypes.func,
  imgLink: PropTypes.string
};

export default GalleryModal;
