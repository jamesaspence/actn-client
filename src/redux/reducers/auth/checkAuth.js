import { STATUSES } from '../../actions';

const checkAuthReducer = (state, action) => {
  const { status } = action;
  switch(status) {
    case STATUSES.LOADING:
      return {
        ...state,
        status
      };
    case STATUSES.SUCCESS:
      return {
        ...state,
        user: action.user,
        status
      };
    case STATUSES.FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        status
      };
    default:
      return state;
  }
};

export default checkAuthReducer;