import React from 'react'
import './strength.css'

const data = [
    { subject: "English", score: 80 },
    { subject: "History", score: 45 },
    { subject: "Physics", score: 30 },
    { subject: "Geography", score: 40 },
    { subject: "Chinese", score: 100 },
    { subject: "Math", score: 20 },
];

const maxScore = 100;
const centerX = 150;
const centerY = 150;
const radius = 100;
const sides = 6;
const angleStep = (2 * Math.PI) / sides;

function polarToCartesian(angle, value, scale = 1) {
  const r = (value / maxScore) * radius * scale;
  return {
    x: centerX + r * Math.cos(angle - Math.PI / 2),
    y: centerY + r * Math.sin(angle - Math.PI / 2),
  };
}

function generateHexagon(scale = 1) {
  return Array.from({ length: sides }, (_, i) => {
    const { x, y } = polarToCartesian(i * angleStep, maxScore, scale);
    return `${x},${y}`;
  }).join(" ");
}

function Strength() {

    const points = data.map((d, i) => {
        const { x, y } = polarToCartesian(i * angleStep, d.score);
        return `${x},${y}`;
      }).join(" ");

  return (
    <div>
        <div className="mt-5 p-3">

            <div className="chart-main-container" style={{ width: "100%", height: 300, fontSize: "0.9rem" }}>
                <h3 className="Chart-Title">Strength</h3>

                <div className="strength-chart">
                  <svg width={300} height={300}>
                      {/* Draw hexagonal grid levels */}
                      {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
                      <polygon
                          key={index}
                          points={generateHexagon(scale)}
                          fill="none"
                          stroke="#ddd"
                          strokeWidth="1"
                      />
                      ))}

                      {/* Draw radial lines */}
                      {Array.from({ length: sides }, (_, i) => {
                      const { x, y } = polarToCartesian(i * angleStep, maxScore);
                      return <line key={i} x1={centerX} y1={centerY} x2={x} y2={y} stroke="#ddd" />;
                      })}

                      {/* Draw tick values inside the chart */}
                      {[0, 20, 40, 60, 80, 100].map((tick, index) => {
                      const y = centerY - (tick / maxScore) * radius;
                      return (
                          <text
                          key={tick}
                          x={centerX}
                          y={y + 4}
                          textAnchor="middle"
                          fontSize={12}
                          fill="#888"
                          >
                          {tick}
                          </text>
                      );
                      })}

                      {/* Draw polygon representing scores */}
                      <polygon points={points} fill="#00A76F" fillOpacity={0.5} stroke="#00A76F" strokeWidth={2} />

                      {/* Draw labels with improved positioning */}
                      {data.map((d, i) => {
                      let { x, y } = polarToCartesian(i * angleStep, maxScore + 15);

                      // Move Chinese & Physics labels slightly outward to avoid overlap
                      if (d.subject === "Chinese") {
                          x -= 8; 
                          y += 5; 
                      }
                      if (d.subject === "Physics") {
                          x += 8; 
                          y += 5; 
                      }

                      return (
                          <text key={d.subject} x={x} y={y} textAnchor="middle" fontSize={14} fill="#555">
                          {d.subject}
                          </text>
                      );
                      })}
                  </svg>
                </div>

            </div>

        </div>      
    </div>
  )
}

export default Strength
