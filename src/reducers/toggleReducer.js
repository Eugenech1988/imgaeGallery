import {
  OPEN_GALLERY_MODAL,
  CLOSE_GALLERY_MODAL,
  TOGGLE_HEADER
} from 'constants/toggleConst';

const initialState = {
  isGalleryModalOpen: false,
  isHeaderOpened: false
};

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case OPEN_GALLERY_MODAL:
      return {...state, isGalleryModalOpen: true};
    case CLOSE_GALLERY_MODAL:
      return {...state, isGalleryModalOpen: false};
    case TOGGLE_HEADER:
      return {...state, isHeaderOpened: !state.isHeaderOpened};
    default:
      return state;
  }
}
