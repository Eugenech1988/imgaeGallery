import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR, SET_IMAGES_FROM_STORE
} from 'constants/imagesConst';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      localStorage.setItem('galleryImagesUrls', JSON.stringify([...state, {link: action.link, id: action.id}]));
      return [...state, {link: action.link, id: action.id}];
    case UPLOAD_IMAGE_ERROR:
      return [...state];
    case SET_IMAGES_FROM_STORE:
      return action.payload;
    default:
      return [...state];
  }
};
