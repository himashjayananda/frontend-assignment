import { useQuery } from "@apollo/client";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { getLaunchesDefaultVariables, GET_LAUNCHES } from "./behavior/queries";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [offset, setOffset] = useState(0);
  const [launches, setLaunches] = useState([]);
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      ...getLaunchesDefaultVariables,
      offset,
    },
  });

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setLaunches(launches.concat(data.launches));
      }
    } else {
      console.error("Error occured" + error);
    }
  }, [error, loading, data]);

  return (
    <div>
      <Sidebar launches={launches} offset={offset} setOffset={setOffset} />
      <Content />
    </div>
  );
}

export default App;
