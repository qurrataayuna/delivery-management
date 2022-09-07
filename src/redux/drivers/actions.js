import {
  SET_DRIVER_DATA,
  SET_PAGINATIONS,
  SET_SEARCH_QUERY,
} from "./constants";

export const setDisplayData = ({ payload }) => ({
  type: SET_DRIVER_DATA,
  payload,
});

export const setPaginations = ({ page, totalPage, startIdx }) => ({
  type: SET_PAGINATIONS,
  payload: {
    page,
    totalPage,
    startIdx,
  },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
