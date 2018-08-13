import {
  UPLOAD_IMAGE_ERROR,
  UPLOAD_IMAGE_SUCCESS,
  SET_IMAGES_FROM_STORE
} from 'constants/imagesConst';
import {startLoading, finishLoading} from './loaderAction';
import {uploadFilesRequest} from 'api/POST/uploadFIlesRequest';

export const uploadImageSuccess = (link, id) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  link,
  id
});

export const uploadImageError = () => ({
  type: UPLOAD_IMAGE_ERROR
});

export const uploadImage = (file) => dispatch => {
  dispatch(startLoading());
  uploadFilesRequest(file)
    .then(res => {
      const data = res.data.data;
      dispatch(uploadImageSuccess(data.link, data.id));
      dispatch(finishLoading());
      console.log(res);
    })
    .catch(err => {
      dispatch(uploadImageError());
      dispatch(finishLoading());
      console.log(err);
    })
};

export const setImagesFromStore = payload => ({
  type: SET_IMAGES_FROM_STORE,
  payload
});
