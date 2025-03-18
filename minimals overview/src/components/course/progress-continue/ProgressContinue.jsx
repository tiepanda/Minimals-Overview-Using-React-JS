import React from "react";
import "./progress-continue.css";
import CourseContinue from "./continue/CourseContinue";
import Progress from "./progress/Progress";

function ProgressContinue() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Left Side Component */}
          <div className="col-12 col-md-6">
            <Progress />
          </div>

          {/* Right Side Component */}
          <div className="col-12 col-md-6">
            <CourseContinue />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressContinue;
