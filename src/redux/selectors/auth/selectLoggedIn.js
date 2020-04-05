import { STATUSES } from '../../actions';

const selectLoggedIn = state => {
  const { status } = state.auth;

  return status === STATUSES.SUCCESS;
};

export default selectLoggedIn;