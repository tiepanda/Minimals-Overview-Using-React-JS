import React from "react";
import "./Course.css";

// Import Left components
import CourseHeader from "./courseHeader/CourseHeader";
import CourseGraph from "./courseGraph/CourseGraph";
import ProgressContinue from "./progress-continue/ProgressContinue";
import Carousel from "./coursecarousel/Carousel";

// Import Right components
import CourseProfile from "./courseProfile/CourseProfile";
import CourseReminder from "./courseReminder/CourseReminder";
import Strength from "./courseStrength/Strength";

function Course() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Left Content */}
            <div className="col-12 col-sm-9" style={{ borderTop: "1px solid #E7E0ED" }}>
              <CourseHeader />

              <CourseGraph />

              <ProgressContinue />
              
              <Carousel />
              
            </div>

          {/* Right Content */}
            <div className="col-12 col-sm-3" style={{ background: "#F6F4F8" }}>

              <CourseProfile />

              <Strength />
              
              <CourseReminder />
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
