import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer, { DEFAULT_STATE as AUTH_DEFAULT_STATE, getPreloadedState as getAuthState } from './auth';
import pricesReducer, { DEFAULT_STATE as PRICES_DEFAULT_STATE } from './prices';

export const DEFAULT_STATE = {
  auth: AUTH_DEFAULT_STATE,
  prices: PRICES_DEFAULT_STATE
};

export const getPreloadedState = () => ({
  ...DEFAULT_STATE,
  auth: getAuthState()
});

const createRootReducer = history => combineReducers({
  auth: authReducer,
  prices: pricesReducer,
  router: connectRouter(history)
});

export default createRootReducer;