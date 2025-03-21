import React from "react";
import PropTypes from "prop-types";

const CircularProgressBar = ({ percentage, color, size = 80 }) => {
  // SVG parameters
  const strokeWidth = 7.5; // Increased by 25% from 6
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Create unique gradient IDs for each instance
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  // Determine gradient colors based on the passed color
  const getGradientColors = (baseColor) => {
    if (baseColor === "#4caf50") {
      return {
        start: "#2e7d32", // Lighter green
        end: "#66bb6a", // Darker green
      };
    } else {
      return {
        start: "#f57f17", // Lighter yellow
        end: "#ffca28", // Darker amber
      };
    }
  };

  const gradientColors = getGradientColors(color);

  return (
    <div className="position-relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Define gradient */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors.start} />
            <stop offset="100%" stopColor={gradientColors.end} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f1f1f1"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle with gradient */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Percentage text in the middle */}
      <div
        className="position-absolute text-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: size * 0.22,
          fontWeight: "bold",
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

const BookedStatusBar2 = ({ bookedStatusCircular }) => {
  return (
    <div className="row g-3 justify-content-center ">
      {bookedStatusCircular.map((item, index) => (
        <div key={index} className="col col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex align-items-center justify-content-center">
            <CircularProgressBar
              percentage={item.percentage}
              color={
                item.status.toLowerCase() === "sold" ? "#4caf50" : "#ffc107"
              }
              size={80}
            />
            <div className="ms-3">
              <h4 className="mb-1 fw-bold">{item.count.toLocaleString()}</h4>
              <p className="text-muted mb-0 small">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

BookedStatusBar2.propTypes = {
  bookedStatusCircular: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookedStatusBar2;
