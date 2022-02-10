import { memo } from "react";
import { Button } from "react-bootstrap";
import "./Sidebar.scss";

const Sidebar = ({ launches, offset, setOffset }) => {
  console.log(launches);
  return (
    <div className="sidebar-wrapper">
      <Button
        className="btn-load-launches"
        onClick={() => setOffset(offset + 10)}
      >
        Load 10 more
      </Button>
    </div>
  );
};

export default memo(Sidebar);
