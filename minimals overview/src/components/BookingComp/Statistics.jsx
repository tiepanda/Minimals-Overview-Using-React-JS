import React, { useState } from "react";
import { Dropdown, Card } from "react-bootstrap";
import { weeklyData, monthlyData, yearlyData } from "../../data/dashboardData";

const Statistics = () => {
  const [timeRange, setTimeRange] = useState("Weekly");
  const [tooltip, setTooltip] = useState(null);

  // Function to get the appropriate data based on selected time range
  const getChartData = () => {
    switch (timeRange) {
      case "Weekly":
        return weeklyData;
      case "Monthly":
        return monthlyData;
      case "Yearly":
        return yearlyData;
      default:
        return weeklyData;
    }
  };

  // Function to get the maximum value for the chart scaling
  const getMaxValue = () => {
    const data = getChartData();
    let max = 0;

    data.forEach((item) => {
      const soldValue = item.sold || 0;
      const canceledValue = item.canceled || 0;
      max = Math.max(max, soldValue, canceledValue);
    });

    // Round up to the nearest 50 for better visualization
    return Math.ceil(max / 50) * 50;
  };

  // Function to get labels based on time range
  const getLabels = () => {
    switch (timeRange) {
      case "Weekly":
        return weeklyData.map((item) => item.label);
      case "Monthly":
        return monthlyData.map((item) => item.label);
      case "Yearly":
        return yearlyData.map((item) => item.label);
      default:
        return weeklyData.map((item) => item.label);
    }
  };

  const maxValue = getMaxValue();
  const data = getChartData();
  const labels = getLabels();

  // Function to show tooltip
  const showTooltip = (e, value, type, period) => {
    // Get position relative to the hovered element
    const rect = e.currentTarget.getBoundingClientRect();
    const chartRect = document
      .querySelector(".chart-area")
      .getBoundingClientRect();

    // Calculate position to center tooltip above the bar
    const x = rect.left - chartRect.left + rect.width / 2 - 40; // Center horizontally
    const y = rect.top - chartRect.top - 50; // Position above the bar

    setTooltip({
      value,
      type,
      period,
      x,
      y,
    });
  };

  // Function to hide tooltip
  const hideTooltip = () => {
    setTooltip(null);
  };

  return (
    <Card className=" p-3 mb-4 border-0 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Statistics</h6>
        <Dropdown>
          <Dropdown.Toggle variant="light" className="border ">
            {timeRange}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setTimeRange("Weekly")}>
              Weekly
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTimeRange("Monthly")}>
              Monthly
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTimeRange("Yearly")}>
              Yearly
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex align-items-center mb-1">
        <div className="d-flex align-items-center me-4">
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "40%",
              backgroundColor: "#2E7D6E",
              marginRight: "8px",
              marginTop: "-30px",
            }}
          ></div>
          <span style={{ fontSize: "14px", marginTop: "-30px" }}>Sold</span>
        </div>
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "40%",
              backgroundColor: "#F9B8AC",
              marginRight: "8px",
              marginTop: "-30px",
            }}
          ></div>
          <span style={{ fontSize: "14px", marginTop: "-30px" }}>Canceled</span>
        </div>
      </div>

      <div className="d-flex align-items-center mb-4">
        <h6 className="me-3 mb-0">6.79k</h6>
        <h6 className=" mb-0">1.23k</h6>
      </div>

      <div style={{ height: "250px", position: "relative" }}>
        {/* Y-axis labels */}
        <div
          className="position-absolute"
          style={{
            // paddingBottom: "50px",
            left: "0",
            top: "0",
            height: "90%",
            width: "40px",
          }}
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${index * 25}%`,
                right: "5px",
                transform: "translateY(-50%)",
                color: "#aaa",
                fontSize: "12px",
              }}
            >
              {Math.round(maxValue - (index * maxValue) / 4)}
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div
          className="chart-area"
          style={{
            marginLeft: "40px",
            height: "110%",
            position: "relative",
            overflow: "visible", // Important to allow tooltip to overflow
          }}
        >
          {/* Tooltip */}
          {tooltip && (
            <div
              className="chart-tooltip"
              style={{
                position: "absolute",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "4px 8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 10,
                left: `${tooltip.x}px`,
                top: `${tooltip.y}px`,
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{tooltip.period}</div>
              <div>
                {tooltip.type}: {tooltip.value}
              </div>
            </div>
          )}

          {/* Horizontal grid lines */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                left: "0",
                right: "0",
                top: `${index * 25}%`,
                borderTop: "1px dashed #eee",
                height: "1px",
              }}
            />
          ))}

          {/* Bars */}
          <div
            className="d-flex justify-content-between align-items-end"
            style={{ height: "80%", width: "100%" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-center"
                style={{ flex: "1", height: "100%", position: "relative" }}
              >
                {/* Sold bar */}
                <div
                  style={{ width: "30%", height: "100%", position: "relative" }}
                >
                  <div
                    style={{
                      backgroundColor: "#2E7D6E",
                      height: `${(item.sold / maxValue) * 100}%`,
                      width: "100%",
                      position: "absolute",
                      bottom: "0",
                      borderRadius: "4px 4px 0 0",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      showTooltip(e, item.sold, "Sold", item.label)
                    }
                    onMouseOut={hideTooltip}
                  ></div>
                </div>

                {/* Space between bars */}
                <div style={{ width: "10%" }}></div>

                {/* Canceled bar */}
                <div
                  style={{ width: "30%", height: "100%", position: "relative" }}
                >
                  <div
                    style={{
                      backgroundColor: "#F9B8AC",
                      height: `${(item.canceled / maxValue) * 100}%`,
                      width: "100%",
                      position: "absolute",
                      bottom: "0",
                      borderRadius: "4px 4px 0 0",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      showTooltip(e, item.canceled, "Canceled", item.label)
                    }
                    onMouseOut={hideTooltip}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="d-flex justify-content-between pt-2">
            {labels.map((label, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  textAlign: "center",
                  color: "#aaa",
                  fontSize: "12px",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Statistics;
