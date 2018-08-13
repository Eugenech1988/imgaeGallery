import React from 'react';
import ReactDOM from 'react-dom';

import ModalWindow from 'components/ModalWindow';

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.getElementById('modal-root');
    this.container = document.createElement('div');
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(<ModalWindow {...this.props} />, this.container);
  }
}

export default ModalPortal;
