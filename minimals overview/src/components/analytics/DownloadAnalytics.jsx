// import React, { useState } from "react";
// import {
//   PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Legend
// } from "recharts";
// import "./DownloadAnalytics.scss";
// import { Dropdown } from "react-bootstrap";

// const totalDownloads = 188245;

// const pieData = [
//   { name: "Mac", value: 9420, color: "#E3FCEC" },
//   { name: "Windows", value: 28236, color: "#71EFA3" },
//   { name: "iOS", value: 65886, color: "#003B40" },
//   { name: "Android", value: 84703, color: "#00746D" },
// ];

// const barDataByYear = {
//   "2022": [
//     { month: "Jan", Asia: 10, Europe: 14, Americas: 4 },
//     { month: "Feb", Asia: 18, Europe: 22, Americas: 10 },
//     { month: "Mar", Asia: 15, Europe: 20, Americas: 8 },
//     { month: "Apr", Asia: 12, Europe: 14, Americas: 6 },
//     { month: "May", Asia: 25, Europe: 30, Americas: 15 },
//     { month: "Jun", Asia: 8, Europe: 10, Americas: 4 },
//     { month: "Jul", Asia: 22, Europe: 26, Americas: 14 },
//     { month: "Aug", Asia: 18, Europe: 20, Americas: 12 },
//     { month: "Sep", Asia: 10, Europe: 12, Americas: 5 },
//     { month: "Oct", Asia: 25, Europe: 30, Americas: 15 },
//     { month: "Nov", Asia: 12, Europe: 14, Americas: 6 },
//     { month: "Dec", Asia: 15, Europe: 20, Americas: 8 },
//   ],
//   "2023": [
//     { month: "Jan", Asia: 12, Europe: 18, Americas: 5 },
//     { month: "Feb", Asia: 25, Europe: 30, Americas: 15 },
//     { month: "Mar", Asia: 20, Europe: 25, Americas: 12 },
//     { month: "Apr", Asia: 15, Europe: 18, Americas: 8 },
//     { month: "May", Asia: 30, Europe: 35, Americas: 20 },
//     { month: "Jun", Asia: 10, Europe: 12, Americas: 5 },
//     { month: "Jul", Asia: 28, Europe: 32, Americas: 18 },
//     { month: "Aug", Asia: 25, Europe: 28, Americas: 15 },
//     { month: "Sep", Asia: 12, Europe: 15, Americas: 6 },
//     { month: "Oct", Asia: 30, Europe: 35, Americas: 18 },
//     { month: "Nov", Asia: 15, Europe: 18, Americas: 8 },
//     { month: "Dec", Asia: 20, Europe: 25, Americas: 12 },
//   ],
//   "2024": [
//     { month: "Jan", Asia: 20, Europe: 20, Americas: 6 },
//     { month: "Feb", Asia: 28, Europe: 35, Americas: 18 },
//     { month: "Mar", Asia: 22, Europe: 28, Americas: 14 },
//     { month: "Apr", Asia: 18, Europe: 22, Americas: 10 },
//     { month: "May", Asia: 35, Europe: 40, Americas: 25 },
//     { month: "Jun", Asia: 12, Europe: 15, Americas: 7 },
//     { month: "Jul", Asia: 30, Europe: 35, Americas: 20 },
//     { month: "Aug", Asia: 28, Europe: 32, Americas: 18 },
//     { month: "Sep", Asia: 15, Europe: 18, Americas: 8 },
//     { month: "Oct", Asia: 35, Europe: 40, Americas: 20 },
//     { month: "Nov", Asia: 18, Europe: 22, Americas: 10 },
//     { month: "Dec", Asia: 22, Europe: 28, Americas: 14 },
//   ],
// };


// const barColors = {
//   Asia: "#00746D",
//   Europe: "#F5B400",
//   Americas: "#00B2FF",
// };

// const DownloadAnalytics = () => {
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [hoverBar, setHoverBar] = useState(null);
//   const [selectedYear, setSelectedYear] = useState("2023");
// const [currentBarData, setCurrentBarData] = useState(barDataByYear["2023"]);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state to control dropdown visibility

//   return (
//     <div className="analytics-container">
//       {/* Pie Chart */}
//       <div className="chart-card small-chart">
//         <h3>Current Download</h3>
//         <p>Downloaded by Operating System</p>

//         <div className="donut-chart">
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 innerRadius={75}
//                 dataKey="value"
//                 stroke="none"
//                 onMouseEnter={(_, index) => setHoverIndex(index)}
//                 onMouseLeave={() => setHoverIndex(null)}
//                 labelLine={false}
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={hoverIndex === index ? darkenColor(entry.color) : entry.color}
//                     style={{ transition: "fill 0.3s ease" }}
//                   />
//                 ))}
//               </Pie>

//               <text
//                 x="50%"
//                 y="45%"
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 className="chart-text"
//                 fontSize="14px"
//                 fontWeight="bold"
//                 fill={hoverIndex !== null ? pieData[hoverIndex].color : "#808080"}
//               >
//                 {hoverIndex !== null ? pieData[hoverIndex].name : "Total"}
//               </text>

//               <text
//                 x="50%"
//                 y="60%"
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 className="chart-number"
//                 fontSize="18px"
//                 fontWeight="bold"
//               >
//                 {hoverIndex !== null
//                   ? pieData[hoverIndex].value.toLocaleString()
//                   : totalDownloads.toLocaleString()}
//               </text>

//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="legend-container">
//           {pieData.map((entry, index) => (
//             <div key={index} className="legend-item">
//               <span
//                 className="legend-color"
//                 style={{ backgroundColor: entry.color }}
//               ></span>
//               <span className="legend-text">{entry.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bar Chart */}
//       <div className="chart-card large-chart">
//         <div className="chart-header">
//           <div className="title-container">
//             <h3>Area Installed</h3>
//             <p>(+43%) than last year</p>

//             <div className="region-labels">
//               <span className="region">
//                 <span className="dot" style={{ backgroundColor: barColors.Asia }}></span> Asia
//               </span>
//               <span className="region">
//                 <span className="dot" style={{ backgroundColor: barColors.Europe }}></span> Europe
//               </span>
//               <span className="region">
//                 <span className="dot" style={{ backgroundColor: barColors.Americas }}></span> Americas
//               </span>
//             </div>

//             <div className="download-numbers">
//               <h2>1.23k</h2>
//               <h2>6.79k</h2>
//               <h2>10.01k</h2>
//             </div>
//           </div>
//           <div className="card-container">
//             <Dropdown
//               className="custom-dropdown"
//               show={isDropdownOpen}
//               onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
//             >
//               <Dropdown.Toggle variant="outline-dark" className="dropdown-toggle">
//                 {selectedYear}
//               </Dropdown.Toggle>
//               <Dropdown.Menu className="dropdown-menu custom-menu">
//                 {["2022", "2023", "2024"].map((year) => (
//                   <Dropdown.Item
//                     key={year}
//                     onClick={() => {
//                       setSelectedYear(year);
//                       setCurrentBarData(barDataByYear[year]); // Update data dynamically
//                     }}
//                     className={selectedYear === year ? "active-item" : ""}
//                   >
//                     {year}
//                   </Dropdown.Item>
//                 ))}
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </div>

//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={currentBarData}>

//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip content={({ payload }) =>
//               payload && hoverBar ? (
//                 <div className="custom-tooltip">
//                   <p>{hoverBar}: {payload[0]?.payload[hoverBar]}</p>
//                 </div>
//               ) : null
//             } />
//             <Legend />
//             {Object.keys(barColors).map((key, index, keys) => (
//               <Bar
//                 key={key}
//                 dataKey={key}
//                 stackId="a"
//                 fill={hoverBar === key ? darkenColor(barColors[key]) : barColors[key]}
//                 radius={index === keys.length - 1 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
//                 onMouseEnter={() => setHoverBar(key)}
//                 onMouseLeave={() => setHoverBar(null)}
//               />
//             ))}
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// const darkenColor = (hex) => {
//   let color = hex.replace("#", "");
//   let r = Math.max(parseInt(color.substring(0, 2), 16) - 30, 0);
//   let g = Math.max(parseInt(color.substring(2, 4), 16) - 30, 0);
//   let b = Math.max(parseInt(color.substring(4, 6), 16) - 30, 0);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// export default DownloadAnalytics;


































import React, { useState } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Legend
} from "recharts";
import "./DownloadAnalytics.scss";
import { Dropdown } from "react-bootstrap";

const totalDownloads = 188245;

const pieData = [
  { name: "Mac", value: 9420, color: "#E3FCEC" },
  { name: "Windows", value: 28236, color: "#71EFA3" },
  { name: "iOS", value: 65886, color: "#003B40" },
  { name: "Android", value: 84703, color: "#00746D" },
];

const barDataByYear = {
  "2022": [
    { month: "Jan", Asia: 10, Europe: 14, Americas: 4 },
    { month: "Feb", Asia: 18, Europe: 22, Americas: 10 },
    { month: "Mar", Asia: 15, Europe: 20, Americas: 8 },
    { month: "Apr", Asia: 12, Europe: 14, Americas: 6 },
    { month: "May", Asia: 25, Europe: 30, Americas: 15 },
    { month: "Jun", Asia: 8, Europe: 10, Americas: 4 },
    { month: "Jul", Asia: 22, Europe: 26, Americas: 14 },
    { month: "Aug", Asia: 18, Europe: 20, Americas: 12 },
    { month: "Sep", Asia: 10, Europe: 12, Americas: 5 },
    { month: "Oct", Asia: 25, Europe: 30, Americas: 15 },
    { month: "Nov", Asia: 12, Europe: 14, Americas: 6 },
    { month: "Dec", Asia: 15, Europe: 20, Americas: 8 },
  ],
  "2023": [
    { month: "Jan", Asia: 12, Europe: 18, Americas: 5 },
    { month: "Feb", Asia: 25, Europe: 30, Americas: 15 },
    { month: "Mar", Asia: 20, Europe: 25, Americas: 12 },
    { month: "Apr", Asia: 15, Europe: 18, Americas: 8 },
    { month: "May", Asia: 30, Europe: 35, Americas: 20 },
    { month: "Jun", Asia: 10, Europe: 12, Americas: 5 },
    { month: "Jul", Asia: 28, Europe: 32, Americas: 18 },
    { month: "Aug", Asia: 25, Europe: 28, Americas: 15 },
    { month: "Sep", Asia: 12, Europe: 15, Americas: 6 },
    { month: "Oct", Asia: 30, Europe: 35, Americas: 18 },
    { month: "Nov", Asia: 15, Europe: 18, Americas: 8 },
    { month: "Dec", Asia: 20, Europe: 25, Americas: 12 },
  ],
  "2024": [
    { month: "Jan", Asia: 20, Europe: 20, Americas: 6 },
    { month: "Feb", Asia: 28, Europe: 35, Americas: 18 },
    { month: "Mar", Asia: 22, Europe: 28, Americas: 14 },
    { month: "Apr", Asia: 18, Europe: 22, Americas: 10 },
    { month: "May", Asia: 35, Europe: 40, Americas: 25 },
    { month: "Jun", Asia: 12, Europe: 15, Americas: 7 },
    { month: "Jul", Asia: 30, Europe: 35, Americas: 20 },
    { month: "Aug", Asia: 28, Europe: 32, Americas: 18 },
    { month: "Sep", Asia: 15, Europe: 18, Americas: 8 },
    { month: "Oct", Asia: 35, Europe: 40, Americas: 20 },
    { month: "Nov", Asia: 18, Europe: 22, Americas: 10 },
    { month: "Dec", Asia: 22, Europe: 28, Americas: 14 },
  ],
};


const barColors = {
  Asia: "#00746D",
  Europe: "#F5B400",
  Americas: "#00B2FF",
};

const DownloadAnalytics = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverBar, setHoverBar] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023");
const [currentBarData, setCurrentBarData] = useState(barDataByYear["2023"]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state to control dropdown visibility

  return (
    <div className="analytics-container">
      {/* Pie Chart */}
      <div className="chart-card small-chart">
        <h3>Current Download</h3>
        <p>Downloaded by Operating System</p>

        <div className="donut-chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={75}
                dataKey="value"
                stroke="none"
                onMouseEnter={(_, index) => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                labelLine={false}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={hoverIndex === index ? darkenColor(entry.color) : entry.color}
                    style={{ transition: "fill 0.3s ease" }}
                  />
                ))}
              </Pie>

              <text
                x="50%"
                y="45%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="chart-text"
                fontSize="14px"
                fontWeight="bold"
                fill={hoverIndex !== null ? pieData[hoverIndex].color : "#808080"}
              >
                {hoverIndex !== null ? pieData[hoverIndex].name : "Total"}
              </text>

              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="chart-number"
                fontSize="18px"
                fontWeight="bold"
              >
                {hoverIndex !== null
                  ? pieData[hoverIndex].value.toLocaleString()
                  : totalDownloads.toLocaleString()}
              </text>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="legend-container">
          {pieData.map((entry, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="legend-text">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-card large-chart">
        <div className="chart-header">
          <div className="title-container">
            <h3>Area Installed</h3>
            <p>(+43%) than last year</p>

            <div className="region-labels">
              <span className="region">
                <span className="dot" style={{ backgroundColor: barColors.Asia }}></span> Asia
              </span>
              <span className="region">
                <span className="dot" style={{ backgroundColor: barColors.Europe }}></span> Europe
              </span>
              <span className="region">
                <span className="dot" style={{ backgroundColor: barColors.Americas }}></span> Americas
              </span>
            </div>

            <div className="download-numbers">
              <h2>1.23k</h2>
              <h2>6.79k</h2>
              <h2>10.01k</h2>
            </div>
          </div>
          <div className="card-container">
            <Dropdown
              className="custom-dropdown"
              show={isDropdownOpen}
              onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
            >
              <Dropdown.Toggle variant="outline-dark" className="dropdown-toggle">
                {selectedYear}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu custom-menu">
                {["2022", "2023", "2024"].map((year) => (
                  <Dropdown.Item
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setCurrentBarData(barDataByYear[year]); // Update data dynamically
                    }}
                    className={selectedYear === year ? "active-item" : ""}
                  >
                    {year}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={currentBarData}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={({ payload }) =>
              payload && hoverBar ? (
                <div className="custom-tooltip">
                  <p>{hoverBar}: {payload[0]?.payload[hoverBar]}</p>
                </div>
              ) : null
            } />
            <Legend />
            {Object.keys(barColors).map((key, index, keys) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={hoverBar === key ? darkenColor(barColors[key]) : barColors[key]}
                radius={index === keys.length - 1 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
                onMouseEnter={() => setHoverBar(key)}
                onMouseLeave={() => setHoverBar(null)}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const darkenColor = (hex) => {
  let color = hex.replace("#", "");
  let r = Math.max(parseInt(color.substring(0, 2), 16) - 30, 0);
  let g = Math.max(parseInt(color.substring(2, 4), 16) - 30, 0);
  let b = Math.max(parseInt(color.substring(4, 6), 16) - 30, 0);
  return `rgb(${r}, ${g}, ${b})`;
};

export default DownloadAnalytics;

