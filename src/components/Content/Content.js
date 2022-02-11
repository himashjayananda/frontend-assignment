import { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LaunchDetails from "./LaunchDetails";
import "./Content.scss";

const Content = ({ deleteLaunch }) => {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route
          path="/launches/:id"
          element={<LaunchDetails deleteLaunch={deleteLaunch} />}
        />
        <Route
          path="/"
          element={
            <>
              <h1>SpaceX</h1>
              <h4>Click on Launches in side bar to view the details.</h4>
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default memo(Content);
