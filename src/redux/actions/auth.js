export const LOGIN = 'LOGIN';

export const loginSuccess = (token, user) => ({
  type: LOGIN,
  token,
  user
});