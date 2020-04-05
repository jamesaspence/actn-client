export const GET_TOP_TEN = 'GET_TOP_TEN';

export const fetchTopTen = (status, data = null) => ({
  type: GET_TOP_TEN,
  status,
  data
});