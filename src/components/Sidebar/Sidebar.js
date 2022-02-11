import { memo } from "react";
import { Button, Spinner } from "react-bootstrap";
import LaunchLink from "./LaunchLink/LaunchLink";
import "./Sidebar.scss";

const Sidebar = ({ loading, launches, offset, setOffset }) => {
  return (
    <div className="sidebar-wrapper">
      <div className="launches-links-wrapper">
        {launches.length
          ? launches.map(launch => (
              <LaunchLink launch={launch} key={launch.id} />
            ))
          : ""}
      </div>

      <Button
        className="btn-load-launches"
        onClick={() => !loading && setOffset(offset + 10)}
        variant="dark"
      >
        {!loading ? (
          "Load 10 more"
        ) : (
          <Spinner animation="border" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Button>
    </div>
  );
};

export default memo(Sidebar);
