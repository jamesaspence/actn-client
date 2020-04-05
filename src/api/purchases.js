import axios from 'axios';
import { createApiUrl, getResponseData, withAuth } from './index';

export const fetchCurrentPurchases = () => {
  return axios.get(createApiUrl('/api/purchases/current'), withAuth())
    .then(getResponseData);
};

export const postCurrentPurchase = (price, quantity) => {
  return axios.post(createApiUrl('/api/purchases'), {
    price,
    quantity
  }, withAuth())
    .then(getResponseData);
};