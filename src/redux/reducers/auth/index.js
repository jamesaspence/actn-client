import { STATUSES } from '../../actions';
import { getAccessToken } from '../../../localStorage';
import { LOGIN } from '../../actions/auth';
import loginSuccessReducer from './loginSuccess';

export const DEFAULT_STATE = {
  status: STATUSES.NOT_LOADED,
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
    default:
      return state;
  }
};

export default authReducer;