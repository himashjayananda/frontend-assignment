import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import "./Content.scss";
import LaunchDetails from "./LaunchDetails";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/launches/:id" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
};

export default memo(Content);
