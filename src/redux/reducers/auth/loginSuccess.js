const loginSuccessReducer = (state, action) => {
  return {
    ...state,
    token: action.token
  };
};

export default loginSuccessReducer;