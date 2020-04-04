import { STATUSES } from '../../actions';

const logoutReducer = (state, action) => {
  return {
    ...state,
    status: STATUSES.NOT_LOADED,
    user: null,
    token: null
  };
};

export default logoutReducer;

