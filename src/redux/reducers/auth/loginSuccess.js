const loginSuccessReducer = (state, action) => {
  return {
    ...state,
    token: action.token,
    user: action.user
  };
};

export default loginSuccessReducer;