import {
  SET_DRIVER_DATA,
  SET_PAGINATIONS,
  SET_SEARCH_QUERY,
} from "./constants";

const initialState = {
  data: [],
  error: null,
  page: 1,
  totalPage: 1,
  startIdx: 0,
  query: "",
};

const drivers = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_PAGINATIONS:
      return {
        ...state,
        page: action.payload.page,
        totalPage: action.payload.totalPage,
        startIdx: action.payload.startIdx,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default drivers;
