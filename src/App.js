import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { getLaunchesDefaultVariables, GET_LAUNCHES } from "./behavior/queries";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setLaunches(launches.concat(data.launches));
      }
    } else {
      console.error("Error occured" + error);
    }
  }, [error, loading, data]);

  const deleteLaunch = id => {
    setLaunches(launches.filter(launch => launch.id !== id));
    const nextLaunch = parseInt(id) + 1;
    navigate(`launches/${nextLaunch}`);
  };

  return (
    <div>
      <Sidebar
        loading={loading}
        launches={launches}
        offset={offset}
        setOffset={setOffset}
      />
      <Content deleteLaunch={deleteLaunch} />
    </div>
  );
}

export default App;
