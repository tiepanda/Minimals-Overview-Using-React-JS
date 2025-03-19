import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./course-graph.css";

function CourseGraph() {
  const [timeFrame, setTimeFrame] = useState("Weekly");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const weeklyData = [
    { name: "Week 1", hours: 10 },
    { name: "Week 2", hours: 40 },
    { name: "Week 3", hours: 35 },
    { name: "Week 4", hours: 150 },
    { name: "Week 5", hours: 50 },
  ];

  const monthlyData = [
    { name: "Jan", hours: 40 },
    { name: "Feb", hours: 90 },
    { name: "Mar", hours: 140 },
    { name: "Apr", hours: 50 },
    { name: "May", hours: 102 },
    { name: "Jun", hours: 140 },
    { name: "Jul", hours: 134 },
    { name: "Aug", hours: 98 },
    { name: "Sep", hours: 65 },
  ];

  const yearlyData = [
    { name: "2018", hours: 24 },
    { name: "2019", hours: 70 },
    { name: "2020", hours: 65 },
    { name: "2021", hours: 95 },
    { name: "2022", hours: 76 },
    { name: "2023", hours: 43 },
  ];

  // Get data based on current timeFrame
  const getData = () => {
    switch (timeFrame) {
      case "Weekly":
        return weeklyData;
      case "Monthly":
        return monthlyData;
      case "Yearly":
        return yearlyData;
      default:
        return yearlyData;
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Select time frame and close dropdown
  const selectTimeFrame = (frame) => {
    setTimeFrame(frame);
    setIsDropdownOpen(false);
  };

  // Get max value for y-axis scale
  const getMaxHours = () => {
    const data = getData();
    return Math.max(...data.map((item) => item.hours)) * 1.3; // Add 30% padding
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row g-0 mt-5">
          <div className="col-sm-8 col-md-12">
            <div className="dashboard-container">
              <div className="header">
                <h2 className="title">Hours spent</h2>

                <div className="custom-select">
                  <button className="dropdown-button" onClick={toggleDropdown}>
                    {timeFrame}
                    <svg
                      style={{
                        marginLeft: "0.5rem",
                        width: "1rem",
                        height: "1rem",
                        color: "#9CA3AF",
                      }}
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-open">
                      <div
                        onClick={() => selectTimeFrame("Weekly")}
                        style={{
                          padding: "0.5rem 1rem",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          color: timeFrame === "Weekly" ? "#4B5563" : "#6B7280",
                          fontWeight: timeFrame === "Weekly" ? 500 : 400,
                          backgroundColor:
                            timeFrame === "Weekly" ? "#F3F4F6" : "transparent",
                        }}
                      >
                        Weekly
                      </div>
                      <div
                        onClick={() => selectTimeFrame("Monthly")}
                        style={{
                          padding: "0.5rem 1rem",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          color:
                            timeFrame === "Monthly" ? "#4B5563" : "#6B7280",
                          fontWeight: timeFrame === "Monthly" ? 500 : 400,
                          backgroundColor:
                            timeFrame === "Monthly" ? "#F3F4F6" : "transparent",
                        }}
                      >
                        Monthly
                      </div>
                      <div
                        onClick={() => selectTimeFrame("Yearly")}
                        style={{
                          padding: "0.5rem 1rem",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          color: timeFrame === "Yearly" ? "#4B5563" : "#6B7280",
                          fontWeight: timeFrame === "Yearly" ? 500 : 400,
                          backgroundColor:
                            timeFrame === "Yearly" ? "#F3F4F6" : "transparent",
                        }}
                      >
                        Yearly
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="chart-container"
                style={{ height: "300px", width: "100%" }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={getData()}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF" }}
                    />
                    <YAxis
                      domain={[0, getMaxHours()]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF" }}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "0.375rem",
                        border: "1px solid #E5E7EB",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="#1F2937"
                      strokeWidth={4}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseGraph;
