import axios from 'axios';
import { createApiUrl, getResponseData, withAuth } from './index';

export const fetchCurrentPurchases = () => {
  return axios.get(createApiUrl('/api/purchases/current'), withAuth())
    .then(getResponseData);
};