const initialState = {
  data: undefined,
  error: null,
};

const drivers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DRIVER_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default drivers;
