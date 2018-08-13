import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR
} from 'constants/imagesConst';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      return [...state, {link: action.link, id: action.id}];
    case UPLOAD_IMAGE_ERROR:
      return [...state];
    default:
      return [...state];
  }
};
