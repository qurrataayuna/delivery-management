import DriversManagementContents from "../components/driverManagementContents";
import Navigations from "../components/navigations";
import SideBar from "../components/sidebar";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Navigations />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <SideBar />
        <DriversManagementContents />
      </div>
    </div>
  );
};

export default Home;
