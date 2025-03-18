import React, { useEffect, useState } from "react";
import "./TopInstalledCountries.scss";
import Flag from "react-world-flags";
import { FaAndroid, FaWindows, FaApple, FaHeart, FaTrophy } from "react-icons/fa";

const countryData = [
  { code: "de", name: "Germany", android: "9.91k", windows: "1.95k", apple: "9.12k" },
  { code: "gb", name: "England", android: "1.95k", windows: "9.12k", apple: "6.98k" },
  { code: "fr", name: "France", android: "9.12k", windows: "6.98k", apple: "8.49k" },
  { code: "kr", name: "Korea", android: "6.98k", windows: "8.49k", apple: "2.03k" },
  { code: "us", name: "USA", android: "8.49k", windows: "2.03k", apple: "3.36k" },
];

const authorData = [
  { img: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp", name: "Jayvion Simon", likes: "9.91k", rankColor: "#30C48D" },
  { img: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp", name: "Deja Brady", likes: "9.12k", rankColor: "#30A9F4" },
  { img: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp", name: "Lucian Obrien", likes: "1.95k", rankColor: "#FA7745" },
];

const statsData = [
  { percentage: 48, number: "38,566", label: "Conversion", color: "#0F6D5F" },
  { percentage: 75, number: "55,566", label: "Applications", color: "#005B96" },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card countries">
        <h3>Top Installed Countries</h3>
        {countryData.map((country, index) => (
          <div key={index} className="country-row">
            {/* <Flag code={country.code} style={{ width: "24px", height: "16px", marginRight: "8px" }} /> */}
            <Flag code={country.code} className="flag-icon" />

            <span>{country.name}</span>
            <span><FaAndroid /> {country.android}</span>
            <span><FaWindows /> {country.windows}</span>
            <span><FaApple /> {country.apple}</span>
          </div>
        ))}
      </div>

<div className="dashboard-card authors">
  <h3>Top Authors</h3>
  {authorData.map((author, index) => (
    <div key={index} className="author-row">
      <img src={author.img} alt={author.name} className="author-img" />
      <div className="author-details">
        <span className="author-name">{author.name}</span>
        <span className="author-likes">
          <FaHeart /> {author.likes}
        </span>
      </div>
      <FaTrophy className="trophy-icon" style={{ color: author.rankColor }} />
    </div>
  ))}
</div>


      <div className="dashboard-card stats">
        {statsData.map((stat, index) => (
          <AnimatedStatsCard 
            key={index} 
            percentage={stat.percentage} 
            number={stat.number} 
            label={stat.label} 
            color={stat.color} 
          />
        ))}
      </div>
    </div>
  );
};

// Animated Stats Card Component
const AnimatedStatsCard = ({ percentage, number, label, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(percentage), 500);
  }, [percentage]);

  return (
    <div className="stats-card" style={{ backgroundColor: color }}>
      <div className="progress-circle">
        <svg viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle-progress"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="percentage">{progress}%</span>
      </div>
      <div className="stats-info">
        <h2>{number}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default DashboardCards;

