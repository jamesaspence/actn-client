import axios from 'axios';
import { getResponseData, withAuth } from './index';

export const recordPrice = (date, price, time) => {
  return axios.post('/api/prices', {
    date,
    price,
    time
  }, withAuth()).then(getResponseData);
};