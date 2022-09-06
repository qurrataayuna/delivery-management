import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDrivers } from "../../redux/drivers/selectors";
import { wrapper } from "./styles";
import { fetchDrivers } from "../../redux/drivers";
import ContentHeader from "./contentHeader";
import DriverList from "./driverList";
import Pagination from "./pagination";

const DriversManagementContents = () => {
  const dispatch = useDispatch();
  // const data = useSelector(selectDrivers);
  const [data, setData] = useState(null);

  console.log("data", data);

  useEffect(() => {
    if (!sessionStorage.getItem("drivers")) {
      axios.get("https://randomuser.me/api/?results=30").then((resp) => {
        sessionStorage.setItem("drivers", JSON.stringify(resp.data.results));
        setData(resp.data.results);
      });
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("drivers")) {
      setData(JSON.parse(sessionStorage.getItem("drivers")));
    }
  }, []);

  return (
    <div css={wrapper}>
      <ContentHeader />
      <DriverList data={data} />
      <Pagination />
    </div>
  );
};

export default DriversManagementContents;
