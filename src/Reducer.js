const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_OKRS":
      return {
        ...state,
        okrs: action.payload,
        okrsClone: action.payload,
      };
    case "UPDATE_OKRS":
      return {
        ...state,
        okrs: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;