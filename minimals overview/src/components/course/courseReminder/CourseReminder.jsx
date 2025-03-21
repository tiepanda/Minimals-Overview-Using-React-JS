import React from "react";
import "./course-reminder.css";

import Stack from "react-bootstrap/Stack";

// Reminder Component Data
const reminder = {
  content: {
    title: {
      heading: "Reminders",
    },
    data: [
      {
        dataTitle: "Introduction to Python Programming",
        dataDate: "05 mars 2025 12:00 am",
        dataPercentage: 58.3,
      },
      {
        dataTitle: "Digital Marketing Fundamentals",
        dataDate: "05 mars 2025 12:00 am",
        dataPercentage: 66.7,
      },
      {
        dataTitle: "Data Science with R",
        dataDate: "05 mars 2025 12:00 am",
        dataPercentage: 75,
      },
      {
        dataTitle: "Graphic Design Essentials",
        dataDate: "05 mars 2025 12:00 am",
        dataPercentage: 88.3,
      },
    ],
  },
};

function CourseReminder() {
  const colorClasses = [
    "color-blue",
    "color-red",
    "color-darkBlue",
    "color-green",
  ];

  return (
    <div>
      <Stack gap={3} className="mt-5 p-4">
        <div className="p-2">
          <div>
            <h6 className="reminder-title">{reminder.content.title.heading}</h6>
          </div>

          {reminder.content.data.map((item, i) => {
            return (
              <div key={i} className="reminder-data-container">
                <div className="reminder-data">
                  <div className={`data-circle ${colorClasses[i % colorClasses.length]}`}></div>
                  <div className="object-container">
                    <a className="object-title">{item.dataTitle}</a>
                    <div className="object-date">
                      <span>{item.dataDate}</span>
                    </div>
                    <div className="object-percentage">
                      <span className="percentage-bar">
                        <span className={`reminder-percentage-bar-fill ${colorClasses[i % colorClasses.length]}`}
                          style={{transform: `translateX(${item.dataPercentage - 100}%)`,}}></span>
                      </span>
                      <span className="percentage">{item.dataPercentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </Stack>
    </div>
  );
}

export default CourseReminder;
