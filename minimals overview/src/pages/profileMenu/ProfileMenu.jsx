import React, { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileMenu.scss";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
 
  const avatars = [
    { id: 1, name: "Ashi", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp" },
    { id: 2, name: "Keerthana", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp" },
    { id: 3, name: "Sneha", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp" },
  ];

  // Close sidebar when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

 
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
 
  return (
    <div className="profile-container">
      {/* Profile Button */}
      <Button
        variant="link"
        className="profile-btn p-0"
        onClick={handleShow}
        aria-label="Open profile menu"
      >
        <img
          src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp"
          alt="Profile"
          className="profile-img"
        />
      </Button>
 
      {/* React Bootstrap Offcanvas */}
      <Offcanvas
        show={isOpen}
        onHide={handleClose}

        placement="end"
        className="profile-offcanvas"
      >
        <Offcanvas.Header className="border-0">

          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </Offcanvas.Header>
       

        <Offcanvas.Body className="d-flex flex-column px-4 pt-0">
          {/* Profile Header */}
          <div className="profile-header text-center mb-4">
            <div className="position-relative mx-auto mb-3">

              <div className="avatar-ring-green"></div>
              <img
                src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp"
                alt="User"
                className="user-avatar"

              />
            </div>
            <h3 className="fw-semibold mb-1">Jaydon Frankie</h3>
            <p className="text-muted small mb-4">demo@minimals.cc</p>

            {/* Avatar Group */}
            <div className="avatar-group d-flex justify-content-center align-items-center">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  className="avatar-wrapper position-relative mx-1"
                  onMouseEnter={() => setHoveredAvatar(avatar.id)}
                  onMouseLeave={() => setHoveredAvatar(null)}
                >
                  <img src={avatar.image} alt={avatar.name} className="avatar" />
                  {hoveredAvatar === avatar.id && (
                    <div className="tooltip">Switch to: {avatar.name}</div>
                  )}
                </div>
              ))}

              {/* Add Avatar Button */}
              <div className="add-avatar-wrapper position-relative mx-1">
                <button
                  className="add-avatar-btn rounded-circle"
                  aria-label="Add new account"
                >
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-grow-1">
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span className="menu-text">Home</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span className="menu-text">Profile</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <span className="menu-text">Projects</span>
                <span className="badge-count">3</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  </svg>
                </span>
                <span className="menu-text">Subscription</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <span className="menu-text">Security</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </span>
                <span className="menu-text">Account settings</span>
              </li>
            </ul>

            {/* Promo Card */}
            <div className="promo-card mt-4">
              <h3 className="promo-title">35% OFF</h3>
              <p className="promo-text">Power up Productivity!</p>
              <button className="upgrade-btn">Upgrade to Pro</button>

              <img
                src="https://assets.minimals.cc/public/assets/illustrations/illustration-rocket-small.webp"
                alt="Rocket"

                className="promo-img"
              />
            </div>
          </nav>

          {/* Logout Button */}
          {/* Logout Button (Fixed at Bottom) */}
<div className="logout-container">
  <button className="logout-btn">
    Logout
  </button>
</div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
 
export default ProfileMenu;
 