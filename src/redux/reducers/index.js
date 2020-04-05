import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer, { DEFAULT_STATE as AUTH_DEFAULT_STATE, getPreloadedState as getAuthState } from './auth';

export const DEFAULT_STATE = {
  auth: AUTH_DEFAULT_STATE
};

export const getPreloadedState = () => ({
  ...DEFAULT_STATE,
  auth: getAuthState()
});

const createRootReducer = history => combineReducers({
  auth: authReducer,
  router: connectRouter(history)
});

export default createRootReducer;