import { STATUSES } from '../../actions';

const selectCurrentPurchases = state => {
  const { status, data } = state.prices.currentPurchases;

  if (status !== STATUSES.SUCCESS) {
    return [];
  }

  return data;
};

export default selectCurrentPurchases;