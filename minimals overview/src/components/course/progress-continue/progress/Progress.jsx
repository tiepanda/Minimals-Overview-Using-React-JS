import React, { useState } from "react";
import './progress.css'

const data = [
  { name: "To start", value: 45, color: "#E6E9ED" }, // Light Gray
  { name: "In progress", value: 25, color: "#118650" }, // Green
  { name: "Completed", value: 20, color: "#FDA600" }, // Yellow
];

const totalValue = data.reduce((sum, item) => sum + item.value, 0);

const listData = {
  content: [
      {
          liTitle: "To start"
      },
      {
          liTitle: "In progress"
      },
      {
          liTitle: "Completed"
      }
  ]
}

const calculatePieSegments = (data) => {
  let cumulativePercent = 0;

  return data.map((slice) => {
    const startPercent = cumulativePercent;
    cumulativePercent += slice.value / totalValue;
    return { ...slice, startPercent, endPercent: cumulativePercent };
  });
};

function Progress() {
    
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const listColor = ["color-gray", "color-green", "color-yellow"]

  const [hovered, setHovered] = useState(null);
  
  // Chart radius
  const radius = 50;
  const center = 50;
  const strokeWidth = 15;

  return (
    <div>
        <div className='main-cardss'>
            <div className='progress-header'>
                <div className='progress-title-container'>
                    <span className='progress-title'>Course progress</span>
                </div>
            </div>

            <div>
                <div
                      className="progress-chart"
                      onMouseMove={(e) => setCursorPosition({ x: e.clientX, y: e.clientY })}
                    >

                      <div
                        style={{ position: "relative", display: "inline-block", marginTop: "10%", marginBottom: "5%" }}
                        onMouseMove={(e) => setCursorPosition({ x: e.clientX, y: e.clientY })}
                      >
                        <svg width="250" height="240" viewBox="0 0 100 100">
                          {calculatePieSegments(data).map((slice, index) => {
                            const startAngle = slice.startPercent * 360;
                            const endAngle = slice.endPercent * 360;
                            const largeArc = endAngle - startAngle > 180 ? 1 : 0;

                            const startX = center + radius * Math.cos((startAngle - 90) * (Math.PI / 180));
                            const startY = center + radius * Math.sin((startAngle - 90) * (Math.PI / 180));
                            const endX = center + radius * Math.cos((endAngle - 90) * (Math.PI / 180));
                            const endY = center + radius * Math.sin((endAngle - 90) * (Math.PI / 180));

                            return (
                              <path
                                key={index}
                                d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY} L ${center} ${center} Z`}
                                fill={slice.color}
                                stroke={slice.color}
                                strokeWidth="0.5"
                                onMouseEnter={() => setHovered(slice)}
                                onMouseLeave={() => setHovered(null)}
                              />
                            );
                          })}

                          {/* Inner white circle to create donut effect */}
                          <circle cx={center} cy={center} r={radius - strokeWidth} fill="white" />

                          {/* Centered text */}
                          <text x="50" y="45" textAnchor="middle" fontSize="6" fontWeight={500} fill={`${hovered ? hovered.color : `#000`}`}>
                            {hovered ? hovered.name : "Total"}
                          </text>
                          <text x="50" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#000">
                            {hovered ? hovered.value : totalValue}
                          </text>
                        </svg>

                        {/* Floating Tooltip */}
                        {hovered && (
                          <div className="Hovered-Graph-Text" style={{ top: `${cursorPosition.y + 10}px`, left: `${cursorPosition.x + 10}px`}} >
                            {/* Color Indicator */}
                            <div className="Hovered-dot" style={{ backgroundColor: hovered.color }}></div>
                            
                            {/* Text Data */}
                            <span>{hovered.name}: {hovered.value}</span>
                          </div>
                        )}
                      </div>

                </div>
            </div>

            <hr />

            <ul className='unorder-container'>
                <li className='list-container'>
                    {listData.content.map((list, l) => {
                        return (
                            <div key={l}>
                                <div className='uolist-data'>
                                    {/* <span className='list-color'></span> */}
                                    <span className={`list-color ${listColor[l % listColor.length]}`}></span>
                                    <span className="course-uList-title">{list.liTitle}</span>
                                </div>
                                <span></span>
                            </div>
                        )
                    })}
                </li>
            </ul>
            
        </div>

    </div>
  )
}

export default Progress
