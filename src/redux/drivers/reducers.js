const initialState = {
  data: [],
  error: null,
  page: 1,
  totalPage: 1,
  startIdx: 0,
};

const drivers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DRIVER_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_PAGINATIONS":
      return {
        ...state,
        page: action.page,
        totalPage: action.totalPage,
        startIdx: action.startIdx,
      };
    default:
      return state;
  }
};

export default drivers;
