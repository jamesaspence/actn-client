import { STATUSES } from '../../actions';

const loginSuccessReducer = (state, action) => {
  return {
    ...state,
    status: STATUSES.SUCCESS,
    token: action.token,
    user: action.user
  };
};

export default loginSuccessReducer;