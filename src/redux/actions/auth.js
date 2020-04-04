import { STATUSES } from './index';

export const LOGIN = 'LOGIN';
export const CHECK_AUTH = 'CHECK_AUTH';

export const loginSuccess = (token, user) => ({
  type: LOGIN,
  token,
  user
});

export const checkAuthLoading = () => ({
  type: CHECK_AUTH,
  status: STATUSES.LOADING
});

export const checkAuthSuccess = user => ({
  type: CHECK_AUTH,
  status: STATUSES.SUCCESS,
  user
});

export const checkAuthFailure = () => ({
  type: CHECK_AUTH,
  status: STATUSES.FAILURE
});