import React from 'react'
import './course-profile.css'

function CourseProfile() {
  return (
    <div>
      <div className="profile-div">
        <div className="profile-animation">
          <span className="animation-span">
              <span className="animation"></span>
          </span>
          <div className="image-div">
            <img className="profile-image" src={`/src/course/Images/avatar.webp`} />
          </div>
        </div>
        <h6>Jaydon Frankie</h6>
        <div>ID: 123987</div>
      </div>
    </div>
  )
}

export default CourseProfile
