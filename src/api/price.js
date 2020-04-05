import axios from 'axios';
import { getResponseData, withAuth, createApiUrl } from './index';

export const recordPrice = (date, price, time) => {
  return axios.post(createApiUrl('/api/prices'), {
    date,
    price,
    time
  }, withAuth()).then(getResponseData);
};