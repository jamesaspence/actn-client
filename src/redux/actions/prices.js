export const GET_TOP_TEN = 'GET_TOP_TEN';
export const GET_CURRENT_PURCHASES = 'GET_CURRENT_PURCHASES';

export const fetchTopTen = (status, data = null) => ({
  type: GET_TOP_TEN,
  status,
  data
});

export const getCurrentPurchases = (status, data = null) => ({
  type: GET_CURRENT_PURCHASES,
  status,
  data
});