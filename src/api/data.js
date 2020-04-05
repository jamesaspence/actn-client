import axios from 'axios';
import { createApiUrl, getResponseData } from './index';

export const fetchTopTenPrices = () => {
  return axios.get(createApiUrl('/api/prices/top10'))
    .then(getResponseData)
};

