import React, { useState } from "react";
import { incomeData } from "../../data/dashboardData";

const TotalIncomeGraph = () => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  // Extract monthly income data
  const { monthlyIncome, totalIncome, percentageChange } = incomeData;

  // Calculate the maximum value for scaling the graph
  const maxIncome = Math.max(...monthlyIncome.map((item) => item.value));

  // Function to get smooth curved path
  const getPathPoints = () => {
    if (monthlyIncome.length < 2) return "";

    let path = `M 0,${100 - (monthlyIncome[0].value / maxIncome) * 70}`;

    for (let i = 0; i < monthlyIncome.length - 1; i++) {
      const x1 = (i / (monthlyIncome.length - 1)) * 100;
      const y1 = 100 - (monthlyIncome[i].value / maxIncome) * 70;

      const x2 = ((i + 1) / (monthlyIncome.length - 1)) * 100;
      const y2 = 100 - (monthlyIncome[i + 1].value / maxIncome) * 70;

      // Control points for the curve
      const cx1 = x1 + (x2 - x1) / 3;
      const cy1 = y1;
      const cx2 = x2 - (x2 - x1) / 3;
      const cy2 = y2;

      path += ` C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
    }

    return path;
  };

  // Function to handle mouse movement over the SVG area
  const handleMouseMove = (e) => {
    const svgRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - svgRect.left;
    const svgWidth = svgRect.width;

    // Calculate which month the user is hovering over
    const monthIndex = Math.min(
      Math.floor((mouseX / svgWidth) * monthlyIncome.length),
      monthlyIncome.length - 1
    );

    setHoveredMonth(monthlyIncome[monthIndex]);
  };

  const handleMouseLeave = () => {
    setHoveredMonth(null);
  };

  return (
    <div
      className="card text-white p-4 position-relative"
      style={{
        borderRadius: "16px",
        backgroundColor: "#1F4D4D",
        backgroundImage: "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "60%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Overlay div for the rotated background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://assets.minimals.cc/public/assets/background/shape-square.svg)",
          backgroundRepeat: "repeat",
          backgroundPosition: "top right",
          // rotate: "90deg",
          backgroundSize: "65%",
          opacity: 0.19,
          // transform: "rotate(90deg)",
          filter:
            "brightness(50%) saturate(100%) invert(50%) sepia(800%) saturate(472%) hue-rotate(155deg) brightness(100%) contrast(1000%)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="d-flex justify-content-between align-items-start mb-4 position-relative"
        style={{ zIndex: 1 }}
      >
        <div>
          <h6
            className="fw-bold mb-2 text-50"
            style={{ fontSize: "12px", color: "#C8FAD6" }}
          >
            Total incomes
          </h6>
          <h2
            className="fw-bold mb-0"
            style={{ fontSize: "30px", color: "#C8FAD6" }}
          >
            $18,765
          </h2>
        </div>
        <div className="text-end">
          <div
            className="d-flex align-items-center"
            style={{ color: "#C8FAD6" }}
          >
            <svg
              // xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="me-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 12.5l-1.146-1.146a.5.5 0 0 1 .707-.708L8 11.086l.439-.44a.5.5 0 0 1 .707.708L8 12.5z" />
              <path d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7z" />
            </svg>
            <span
              className="fw-bold"
              style={{ fontSize: "14px", color: "#C8FAD6" }}
            >
              +2.6%
            </span>
          </div>
          <div
            className="text-50"
            style={{ fontSize: "12px", opacity: 0.8, color: "#C8FAD6" }}
          >
            last month
          </div>
        </div>
      </div>

      <div
        className="position-relative mt-3"
        style={{ height: "100px", zIndex: 1 }}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="1 1 100 100"
          preserveAspectRatio="none"
          onMouseMove={handleMouseMove}
          // strokeLinecap="rounded"
          // strokeLinejoin="rounded"
          // onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          {/* Path for the line chart with smooth curves */}
          <path
            d={getPathPoints()}
            fill="none"
            stroke="#C8FAD6"
            strokeWidth="1"
            strokeLinecap="rounded"
            strokeLinejoin="rounded"
            opacity={0.8}
          />

          {/* Hover line */}
          {hoveredMonth && (
            <line
              x1={
                (monthlyIncome.findIndex(
                  (m) => m.month === hoveredMonth.month
                ) /
                  (monthlyIncome.length - 1)) *
                100
              }
              y1="0"
              x2={
                (monthlyIncome.findIndex(
                  (m) => m.month === hoveredMonth.month
                ) /
                  (monthlyIncome.length - 1)) *
                100
              }
              y2="100"
              stroke="#C8FAD6"
              strokeWidth="0.4"
              strokeDasharray="2,2"
            />
          )}

          {/* Interactive points for each month */}
          {monthlyIncome.map((item, index) => {
            const x = (index / (monthlyIncome.length - 1)) * 100;
            const y = 100 - (item.value / maxIncome) * 70;
            const isHovered = hoveredMonth && hoveredMonth.month === item.month;

            return (
              <g key={item.month}>
                {isHovered && (
                  <circle
                    cx={x}
                    cy={y}
                    r="2"
                    height="10%"
                    fill="#C8FAD6"
                    // stroke="red"
                    strokeWidth="2"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Month tooltip */}
        {hoveredMonth && (
          <div
            className="position-absolute bg-white text-dark p-2 rounded shadow-sm"
            style={{
              left: `${
                (monthlyIncome.findIndex(
                  (m) => m.month === hoveredMonth.month
                ) /
                  (monthlyIncome.length - 1)) *
                100
              }%`,
              top: `${100 - (hoveredMonth.value / maxIncome) * 70 - 70}px`,
              transform: "translateX(-50%)",
              zIndex: 10,
              minWidth: "80px",
            }}
          >
            <div
              className="text-center fw-bold"
              style={{ fontSize: "14px", color: "#637381" }}
            >
              {hoveredMonth.month}
            </div>
            <div
              className="text-center text-success"
              style={{ fontSize: "16px" }}
            >
              ${hoveredMonth.value}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalIncomeGraph;
