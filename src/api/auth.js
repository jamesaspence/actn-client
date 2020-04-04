import axios from 'axios';
import { getResponseData } from './index';

export const attemptLogin = (email, password) => {
  return axios.post('/api/login', {
    email,
    password
  }).then(getResponseData);
};