const getCurrentPricesReducer = (state, action) => {
  const { status, data } = action;
  return {
    ...state,
    currentPurchases: {
      status,
      data
    }
  };
};

export default getCurrentPricesReducer;