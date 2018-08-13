import {
  OPEN_GALLERY_MODAL,
  CLOSE_GALLERY_MODAL
} from 'constants/toggleConst';

export const openGalleryModal = () => ({
  type: OPEN_GALLERY_MODAL
});

export const clostGalleryModal = () => ({
  type: CLOSE_GALLERY_MODAL
});
