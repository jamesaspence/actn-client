const addCurrentPurchaseReducer = (state, action) => {
  const { price, quantity } = action;
  const { data, ...rest } = state.currentPurchases;
  const newPrice = {
    price,
    quantity
  };

  return {
    ...state,
    currentPurchases: {
      ...rest,
      data: data.concat(newPrice)
    }
  }
};

export default addCurrentPurchaseReducer;