import { ADD_CURRENT_PURCHASE, GET_CURRENT_PURCHASES, GET_TOP_TEN } from '../../actions/prices';
import fetchTopTenReducer from './fetchTopTen';
import getCurrentPricesReducer from './getCurrentPrices';
import addCurrentPurchaseReducer from './addCurrentPurchase';

export const DEFAULT_STATE = {
  topTen: {
    status: null,
    data: null
  },
  currentPurchases: {
    status: null,
    data: null
  }
};

const pricesReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case GET_TOP_TEN:
      return fetchTopTenReducer(state, action);
    case GET_CURRENT_PURCHASES:
      return getCurrentPricesReducer(state, action);
    case ADD_CURRENT_PURCHASE:
      return addCurrentPurchaseReducer(state, action);
    default:
      return state;
  }
};

export default pricesReducer;