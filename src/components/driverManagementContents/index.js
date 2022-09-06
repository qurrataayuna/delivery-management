import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDrivers } from "../../redux/drivers/selectors";
import { wrapper } from "./styles";
import { fetchDrivers } from "../../redux/drivers";
import ContentHeader from "./contentHeader";
import DriverList from "./driverList";

const DriversManagementContents = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDrivers);

  console.log("data", data);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=30").then((resp) =>
      dispatch(
        fetchDrivers({
          payload: resp.data,
        })
      )
    );
  }, []);

  return (
    <div css={wrapper}>
      <ContentHeader />

      <DriverList data={data?.results} />
    </div>
  );
};

export default DriversManagementContents;
