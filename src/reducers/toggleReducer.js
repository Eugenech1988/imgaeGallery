import {
  OPEN_GALLERY_MODAL,
  CLOSE_GALLERY_MODAL
} from 'constants/toggleConst';

const initialState = {
  isGalleryModalOpen: false
};

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case OPEN_GALLERY_MODAL:
      return {...state, isGalleryModalOpen: true};
    case CLOSE_GALLERY_MODAL:
      return {...state, isGalleryModalOpen: false};
    default:
      return state;
  }
}
