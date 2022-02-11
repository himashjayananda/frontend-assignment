import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Spinner } from "react-bootstrap";
import { GET_LAUNCH } from "../../behavior/queries";

const LaunchDetails = ({ deleteLaunch }) => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: {
      launchId: params.id,
    },
  });

  if (error) console.error("Error occurred - " + error);

  if (!loading) {
    const {
      id,
      mission_name,
      launch_year,
      details,
      launch_success,
      launch_site: { site_name },
      rocket: { rocket_name, rocket },
    } = data.launch;

    return (
      <div>
        <h2>{mission_name}</h2>
        <div className="fw-bold">{site_name}</div>
        <div className="mt-2">{launch_year}</div>
        <p className="mt-2 fw-light">{details}</p>
        <div>
          Launch Result:
          {launch_success ? (
            <span className="text-success">{" Success"}</span>
          ) : (
            <span className="text-danger">{" Failure"}</span>
          )}
        </div>
        <h5 className="mt-3">Rocket used :</h5>
        <div className="mt-3 fw-bold">{rocket_name}</div>
        <p className="mt-2 fw-light">{rocket.description}</p>
        <div>
          <Button variant="danger" onClick={() => deleteLaunch(id)}>
            Delete
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <Spinner animation="border" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
};

export default LaunchDetails;
