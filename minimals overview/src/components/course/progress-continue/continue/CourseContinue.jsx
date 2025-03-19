import React from 'react'
import './course-continue.css'

// Continue Data 
const continueData = {
  content: {
      title: {
          heading: "Continue course"
      },
      data: [
          {
              continueImage: "continue-course-1.webp",
              continueTitle: "Introduction to Python Programming",
              continueSubtitle: "Lessons: 7/12",
              continuePercentage: 58.3
          },
          {
              continueImage: "continue-course-2.webp",
              continueTitle: "Digital Marketing Fundamentals",
              continueSubtitle: "Lessons: 8/12",
              continuePercentage: 70
          },
          {
              continueImage: "continue-course-3.webp",
              continueTitle: "Data Science with R",
              continueSubtitle: "Lessons: 9/12",
              continuePercentage: 75
          },
          {
              continueImage: "continue-course-4.webp",
              continueTitle: "Graphic Design Essentials",
              continueSubtitle: "Lessons: 10/12",
              continuePercentage: 83.3
          }
      ]
  }
}

function CourseContinue() {
  return (
    <div>
      
      <div className='main-cardss'>
        <div className='container-title'>
            <div className='title'>
                <span className='heading'>{continueData.content.title.heading}</span>
            </div>
        </div>
        {continueData.content.data.map((item, i) => {
            return (
                <div key={i} className='main-contentss'>
                    <div className='sub-content'>
                        <div className='image-container'>
                            <img className='image' src={`../src/assets/images/Course-Images/course-continue/${item.continueImage}`} />
                        </div>

                        <div className='data-content'>
                            <a className='data-title'>{item.continueTitle}</a>
                            <span className='data-subtitle'>{item.continueSubtitle}</span>
                            <div className='percentage-container'>
                                <span className='percentage-bar'>
                                    <span className='percentage-bar-fill' 
                                    style={{ transform: `translateX(${item.continuePercentage - 100}%)` }}
                                    ></span>
                                </span>
                                <span className='percentage'>{item.continuePercentage}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default CourseContinue
