import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Navbar from "./components/Navbar";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const final = await response.json();
      setLoading(false);
      setData(final);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
    <Navbar />
      <Tours data={data} />
    </>
  );
};
export default App;
