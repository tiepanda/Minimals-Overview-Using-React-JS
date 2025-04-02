import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

// Import data from dashboardData.js
import { sidebarMenuItems, userData } from "../../data/dashboardData";
import { Container, Row } from "react-bootstrap";

const Sidebar = ({ onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    // Notify parent component of the sidebar state change
    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        <div className="logo">
          {isExpanded && <></>}
          <span className="minimals-text">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id=":r1:-1"
                  x1="152"
                  y1="167.79"
                  x2="65.523"
                  y2="259.624"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#007867"></stop>
                  <stop offset="1" stopColor="#00A76F"></stop>
                </linearGradient>
                <linearGradient
                  id=":r1:-2"
                  x1="86"
                  y1="128"
                  x2="86"
                  y2="384"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BE49B"></stop>
                  <stop offset="1" stopColor="#00A76F"></stop>
                </linearGradient>
                <linearGradient
                  id=":r1:-3"
                  x1="402"
                  y1="288"
                  x2="402"
                  y2="384"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BE49B"></stop>
                  <stop offset="1" stopColor="#00A76F"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#:r1:-1)"
                d="M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"
              ></path>
              <path
                fill="url(#:r1:-2)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"
              ></path>
              <path
                fill="url(#:r1:-3)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"
              ></path>
            </svg>
          </span>
        </div>
        <button className="toggle-button fw-bolder" onClick={toggleSidebar}>
          {isExpanded ? "←" : "→"}
        </button>
      </div>

      <div className="sidebar-content">
        {sidebarMenuItems.map((group, groupIndex) => (
          <div key={groupIndex} className="menu-group">
            {group.section && (
              <div className="section-title">
                {isExpanded && <span>{group.section}</span>}
              </div>
            )}
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`menu-item ${item.active ? "active" : ""} ${
                  item.disabled ? "disabled" : ""
                }`}
              >
                <Link to={item.path} className="menu-item-content">
                  <span className="icon">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="menu-icon"
                      style={
                        {
                          // mask: "url(../src/images/page-icons/${item.icon})",
                          // backgroundColor: "rgb(91, 228, 155)",
                        }
                      }
                    />
                  </span>
                  {isExpanded && (
                    <div className="label-container">
                      <div className="label-main">
                        <span className="label">{item.label}</span>
                        {item.badge && (
                          <span className="badge">{item.badge}</span>
                        )}
                      </div>
                      {item.subtitle && (
                        <div className="subtitle">{item.subtitle}</div>
                      )}
                    </div>
                  )}
                </Link>
                {isExpanded && item.hasChildren && (
                  <span className="chevron">›</span>
                )}
                {isExpanded && item.isExternal && (
                  <span className="external-icon">↗</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {isExpanded && (
        <div className="pb-3">
          <div className="user-profile">
            <div className="avatar-container">
              <img
                src={userData.avatar || "/api/placeholder/48/48"}
                alt="User avatar"
                className="avatar"
              />
              <span className="free-badge">Free</span>
            </div>

            <div className="user-info">
              <h6 className="username">{userData.name}</h6>
              <p className="email">{userData.email}</p>
            </div>

            <a
              href="https://mui.com/store/items/minimal-dashboard/"
              target="_blank"
              rel="noopener"
              className="upgrade-button"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
