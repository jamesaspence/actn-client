import { getAccessToken } from '../../../localStorage';
import { CHECK_AUTH, LOGIN, LOGOUT } from '../../actions/auth';
import loginSuccessReducer from './loginSuccess';
import checkAuthReducer from './checkAuth';
import logoutReducer from './logout';

export const DEFAULT_STATE = {
  status: null,
  user: null,
  token: null
};

export const getPreloadedState = () => {
  const token = getAccessToken();

  if (token == null) {
    return DEFAULT_STATE;
  }

  return {
    ...DEFAULT_STATE,
    token
  };
};

const authReducer = (state = DEFAULT_STATE, action = {}) => {
  const { type } = action;

  switch (type) {
    case LOGIN:
      return loginSuccessReducer(state, action);
    case LOGOUT:
      return logoutReducer(state, action);
    case CHECK_AUTH:
      return checkAuthReducer(state, action);
    default:
      return state;
  }
};

export default authReducer;