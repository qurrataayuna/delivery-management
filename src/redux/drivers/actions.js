export const fetchDrivers = ({ payload }) => ({
  type: "FETCH_DRIVER_DATA",
  payload,
});

export const setPaginations = ({ page, totalPage, startIdx }) => ({
  type: "SET_PAGINATIONS",
  page,
  totalPage,
  startIdx,
});
