const fetchTopTenReducer = (state, action) => {
  const { status, data } = action;
  return {
    ...state,
    topTen: {
      status,
      data
    }
  };
};

export default fetchTopTenReducer;