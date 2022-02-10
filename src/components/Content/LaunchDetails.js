import { useParams } from "react-router-dom";

const LaunchDetails = () => {
  let params = useParams();

  return (
    <>
      <h1>Launch</h1>
      <h2>{params.id}</h2>
    </>
  );
};

export default LaunchDetails;
