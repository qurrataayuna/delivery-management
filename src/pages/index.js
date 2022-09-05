import axios from "axios";
import { useEffect, useState } from "react";
import Navigations from "../components/navigations";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((resp) => setData(resp.data));
  }, []);

  console.log(data);

  return (
    <div>
      <Navigations />
      <p>Hello World</p>
    </div>
  );
};

export default Home;
