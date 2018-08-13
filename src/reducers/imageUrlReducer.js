import {
  SET_IMAGE_URL
} from 'constants/imagesConst';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return {...state, url: action.url};
    default:
      return {...state}
  }
}
