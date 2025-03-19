import React from "react";
import { Card } from "react-bootstrap";
import { dashboardData } from "../../data/dashboardData";

const ToursAvailable = () => {
  // Extract data from dashboardData
  const {
    totalTours = 186,
    soldOutTours = 120,
    availableTours = 66,
  } = dashboardData.tours || {};

  // Calculate percentage for the circular progress
  const soldOutPercentage = (soldOutTours / totalTours) * 100;

  // Calculate the stroke dasharray and dashoffset for the circle
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const soldOutDasharray = (soldOutPercentage / 100) * circumference;
  const dashOffset = circumference - soldOutDasharray;

  return (
    <Card
      className=" "
      style={{
        borderRadius: "5%",
        border: "none",
        boxShadow:
          "0 0 2px 0 rgba(145 158 171 / 0.2), 0 12px 24px -4px rgba(145 158 171 / 0.12)",
      }}
    >
      <Card.Body className="p-4">
        <h1 className="  " style={{ fontSize: "19px" }}>
          Tours available
        </h1>

        <div
          className=" d-flex justify-content-center align-items-center "
          style={{ height: "300px" }}
        >
          {/* Define the gradient */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="greenGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#63d19e" />
                <stop offset="100%" stopColor="#00A76F" />
              </linearGradient>
            </defs>
          </svg>

          {/* Background circle (light gray) */}
          <svg
            width="240"
            height="240"
            viewBox="0 0 160 160"
            className="position-absolute"
          >
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>

          {/* Progress circle (gradient green) */}
          <svg
            width="240"
            height="240"
            viewBox="0 0 160 160"
            className="position-absolute"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="url(#greenGradient)"
              strokeWidth="14"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Center text */}
          <div className="text-center position-absolute">
            <h6 className=" mb-1 text-secondary" style={{ fontSize: "14px" }}>
              Tours
            </h6>
            <h6 className="mb-0 fw-bold">{totalTours}</h6>
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#00A76F",
                  borderRadius: "40%",
                  marginRight: 10,
                }}
              ></div>
              <span
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#637381",
                }}
              >
                Sold out
              </span>
            </div>
            <span className="fw-medium" style={{ fontSize: "14px" }}>
              {soldOutTours} tours
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "40%",
                  marginRight: 10,
                }}
              ></div>
              <span
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#637381",
                }}
              >
                Available
              </span>
            </div>
            <span className="fw-medium" style={{ fontSize: "14px" }}>
              {availableTours} tours
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ToursAvailable;
