import { uploadHeaders } from '../axiosCofig';
import { UPLOAD_PHOTO_URL } from '../urls';
import axios from 'axios'

export const uploadFilesRequest = (file) => {
  return axios.post(UPLOAD_PHOTO_URL, file, uploadHeaders);
};
