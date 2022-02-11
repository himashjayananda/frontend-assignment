import { memo } from "react";
import { NavLink } from "react-router-dom";
import "./LaunchLink.scss";

const LaunchLink = ({
  launch: {
    id,
    mission_name,
    launch_year,
    launch_site: { site_name },
  },
}) => {
  return (
    <NavLink
      to={`/launches/${id}`}
      className={({ isActive }) =>
        isActive ? "launch-link-wrapper active-link" : "launch-link-wrapper"
      }
      key={id}
    >
      <div className="fw-bold mb-1">{mission_name}</div>
      <div className="mb-1">{site_name}</div>
      <div className="fw-light">{launch_year}</div>
    </NavLink>
  );
};

export default memo(LaunchLink);
