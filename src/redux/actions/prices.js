export const GET_TOP_TEN = 'GET_TOP_TEN';
export const GET_CURRENT_PURCHASES = 'GET_CURRENT_PURCHASES';
export const ADD_CURRENT_PURCHASE = 'ADD_CURRENT_PURCHASE';

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

export const addCurrentPurchase = (price, quantity) => ({
  type: ADD_CURRENT_PURCHASE,
  price,
  quantity
});