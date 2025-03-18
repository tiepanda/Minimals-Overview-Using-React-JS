import React, { useState } from "react";
import "./StatsSection.scss";

const StatsSection = () => {
  const [hoveredBar, setHoveredBar] = useState({ cardIndex: null, barIndex: null });

  const statsData = [
    {
      title: "Total active users",
      value: "18,765",
      change: "+2.6%",
      trend: "up",
      color: "green",
      bars: [
        { month: "Jan", value: 4, data: "1,200 users" },
        { month: "Feb", value: 7, data: "2,500 users" },
        { month: "Mar", value: 8, data: "2,000 users" },
        { month: "Apr", value: 2, data: "3,000 users" },
        { month: "May", value: 5, data: "1,200 users" },
        { month: "Jun", value: 3, data: "2,500 users" },
        { month: "Jul", value: 8, data: "2,000 users" },
        { month: "Aug", value: 10, data: "3,000 users" },
      ],
    },
    {
      title: "Total installed",
      value: "4,876",
      change: "+0.2%",
      trend: "up",
      color: "blue",
      bars: [
        { month: "Jan", value: 8, data: "800 installs" },
        { month: "Feb", value: 5, data: "2,100 installs" },
        { month: "Mar", value: 7, data: "1,500 installs" },
        { month: "Apr", value: 9, data: "2,500 installs" },
        { month: "May", value: 6, data: "800 installs" },
        { month: "Jun", value: 2, data: "2,100 installs" },
        { month: "Jul", value: 7, data: "1,500 installs" },
        { month: "Aug", value: 2, data: "2,500 installs" },
      ],
    },
    {
      title: "Total downloads",
      value: "678",
      change: "-0.1%",
      trend: "down",
      color: "red",
      bars: [
        { month: "Jan", value: 5, data: "400 downloads" },
        { month: "Feb", value: 9, data: "1,200 downloads" },
        { month: "Mar", value: 6, data: "900 downloads" },
        { month: "Apr", value: 2, data: "1,800 downloads" },
        { month: "May", value: 5, data: "400 downloads" },
        { month: "Jun", value: 4, data: "1,200 downloads" },
        { month: "Jul", value: 6, data: "900 downloads" },
        { month: "Aug", value: 9, data: "1,800 downloads" },
      ],
    },
  ];

  return (
    <div className="stats-section">
      {statsData.map((stat, cardIndex) => (
        <div className="stat-card" key={cardIndex}>
          <div className="stat-details">
            <h4>{stat.title}</h4>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.trend}`}>
              <svg
                xmlns="http://www.w3.org/1999/xlink"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={stat.trend === "up" ? "green" : "red"}
              >
                {stat.trend === "up" ? (
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8z" />
                ) : (
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.59-5.58L4 12l8 8z" />
                )}
              </svg>
              {stat.change} last 7 days
            </div>
          </div>

          {/* Bar Graph on the Right Side */}
          <div className="bar-graph">
            {stat.bars.map((bar, barIndex) => (
              <div
                key={barIndex}
                className={`bar ${stat.color}`}
                style={{ height: `${bar.value * 4}px` }}
                onMouseEnter={() => setHoveredBar({ cardIndex, barIndex })}
                onMouseLeave={() => setHoveredBar({ cardIndex: null, barIndex: null })}
              >
                {/* Tooltip (Visible only for hovered bars within the same card) */}
                {hoveredBar.cardIndex === cardIndex && hoveredBar.barIndex === barIndex && (
                  <div className="tooltip-box">
                    <div className="tooltip-content">
                      <strong>{bar.month}</strong>
                      <div className="tooltip-info">
                        <span className="dot" style={{ backgroundColor: stat.color }}></span>
                        <span>{bar.value}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

