import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigations from "../components/navigations";
import SideBar from "../components/sidebar";
import { fetchDrivers } from "../redux/drivers/actions";
import { selectDrivers } from "../redux/drivers/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector(selectDrivers);

  console.log(drivers);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=30").then((resp) =>
      dispatch(
        fetchDrivers({
          payload: resp.data,
        })
      )
    );
  }, [dispatch]);

  return (
    <div>
      <Navigations />

      <div>
        <SideBar />
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Home;
