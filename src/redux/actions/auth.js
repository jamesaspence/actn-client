export const LOGIN = 'LOGIN';

export const loginSuccess = token => ({
  type: LOGIN,
  token
});