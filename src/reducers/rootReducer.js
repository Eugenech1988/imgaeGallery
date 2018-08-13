import { combineReducers } from 'redux';
import loading from './loaderReducer';
import images from './imagesReducer';

export default combineReducers({
  loading,
  images,
});
