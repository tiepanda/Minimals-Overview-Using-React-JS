import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const BookedStatusBar = ({ initialBookedData }) => {
  const [bookedData, setBookedData] = useState(initialBookedData);

  // Function to determine the color of the progress bar based on status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "#FFC107"; // Yellow
      case "canceled":
        return "#FF6B53"; // Red/Orange
      case "sold":
        return "#54D62C"; // Green
      default:
        return "#E2E2E2"; // Default gray
    }
  };

  const formatNumber = (num) =>
    num >= 1000 ? `${(num / 1000).toFixed(2)}k` : num;

  const handleStatusClick = (status) => {
    const item = bookedData.find((item) => item.status === status);
    if (item) {
      const newCount = Math.round(item.count * 1.05);
      const newPercentage = Math.min(100, item.percentage + 5);
      setBookedData((prevData) =>
        prevData.map((data) =>
          data.status === status
            ? { ...data, count: newCount, percentage: newPercentage }
            : data
        )
      );
    }
  };

  return (
    <div className="pt-3 px-2">
      <h6 className="mb-3">Booked</h6>

      {bookedData.map((item) => (
        <div
          key={item.status}
          className="mb-3"
          onClick={() => handleStatusClick(item.status)}
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex justify-content-between mb-1">
            <h6 className="text-uppercase fw-bold" style={{ fontSize: "12px" }}>
              {item.status}
            </h6>
            <span className="fw-bold">{formatNumber(item.count)}</span>
          </div>
          {/* Corrected ProgressBar with dynamic background color */}
          <ProgressBar
            now={item.percentage}
            style={{
              backgroundColor: "#E2E2E2",
              height: "8px",
            }}
          >
            <ProgressBar
              now={item.percentage}
              style={{
                backgroundColor: getStatusColor(item.status), // Applying dynamic color correctly
                height: "8px",
              }}
            />
          </ProgressBar>
        </div>
      ))}
    </div>
  );
};

BookedStatusBar.propTypes = {
  initialBookedData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookedStatusBar;
