import {
  OPEN_GALLERY_MODAL,
  CLOSE_GALLERY_MODAL, TOGGLE_HEADER
} from 'constants/toggleConst';

export const openGalleryModal = () => ({
  type: OPEN_GALLERY_MODAL
});

export const closeGalleryModal = () => ({
  type: CLOSE_GALLERY_MODAL
});

export const toggleHeader = () => ({
  type: TOGGLE_HEADER
});
