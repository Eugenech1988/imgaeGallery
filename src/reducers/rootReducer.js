import { combineReducers } from 'redux';
import loading from './loaderReducer';
import images from './imagesReducer';
import toggles from './toggleReducer';
import imgUrl from './imageUrlReducer';

export default combineReducers({
  loading,
  images,
  toggles,
  imgUrl
});
