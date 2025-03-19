import React from "react";

// Import Left components
import CourseHeader from "../components/course/courseHeader/CourseHeader";
import CourseGraph from "../components/course/courseGraph/CourseGraph";
import ProgressContinue from "../components/course/progress-continue/ProgressContinue";
import Carousel from "../components/course/coursecarousel/Carousel";

// Import Right components
import CourseProfile from "../components/course/courseProfile/CourseProfile";
import CourseReminder from "../components/course/courseReminder/CourseReminder";
import Strength from "../components/course/courseStrength/Strength";

function Course() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Left Content */}
          <div
            className="col-12 col-md-9 col-sm-8"
            style={{ borderTop: "1px solid #E7E0ED" }}
          >
            <CourseHeader />

            <CourseGraph />

            <ProgressContinue />

            <Carousel />
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-3 col-sm-4" style={{ background: "#F6F4F8" }}>
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
