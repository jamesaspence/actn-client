import { GET_TOP_TEN } from '../../actions/prices';
import fetchTopTenReducer from './fetchTopTen';

export const DEFAULT_STATE = {
  topTen: {
    status: null,
    data: null
  }
};

const pricesReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case GET_TOP_TEN:
      return fetchTopTenReducer(state, action);
    default:
      return state;
  }
};

export default pricesReducer;