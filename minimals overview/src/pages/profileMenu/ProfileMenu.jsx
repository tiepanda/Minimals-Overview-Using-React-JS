// import React, { useState, useEffect } from "react";
// import "./ProfileMenu.scss";
// import "bootstrap-icons/font/bootstrap-icons.css";


// const ProfileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredAvatar, setHoveredAvatar] = useState(null);
//   const [isClicked, setIsClicked] = useState(false);

//   const avatars = [
//     { id: 1, name: "Ashi", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp" },
//     { id: 2, name: "Keerthana", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp" },
//     { id: 3, name: "Sneha", image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp" },
//   ];

//   // Close sidebar when Escape key is pressed
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div className="profile-container">
//       {/* Profile Button */}
//       <button className="profile-btn" onClick={() => setIsOpen(true)} aria-label="Open profile menu">
//         <img src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp" alt="Profile" className="profile-img" />
//       </button>

//       {/* Sidebar */}
//       <aside className={`sidebar ${isOpen ? "open" : ""}`} role="dialog" aria-modal="true">
//         {/* Close Button */}
//         <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close profile menu">
//           &times;
//         </button>

//         {/* Profile Header */}
//         <div className="profile-content">
//         <div className="profile-header">
//         <div className="avatar-ring"></div> 
//           <img src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp" alt="User" className="user-avatar" />
//           <h3>Jaydon Frankie</h3>
//           <p>demo@minimals.cc</p>

//           {/* Avatar Group */}
//           <div className="avatar-group">
//             {avatars.map((avatar) => (
//               <div
//                 key={avatar.id}
//                 className="avatar-wrapper"
//                 onMouseEnter={() => setHoveredAvatar(avatar.id)}
//                 onMouseLeave={() => setHoveredAvatar(null)}
//               >
//                 <img src={avatar.image} alt={avatar.name} className="avatar" />
//                 {hoveredAvatar === avatar.id && <div className="tooltip">Switch to: {avatar.name}</div>}
//               </div>
//             ))}

//             {/* Add Avatar Button with Hover & Click Effect */}
//             <div className="add-avatar-wrapper">
//               <button
//                 className={`add-avatar ${isClicked ? "clicked" : ""}`}
//                 onMouseDown={() => setIsClicked(true)}
//                 onMouseUp={() => setIsClicked(false)}
//                 onBlur={() => setIsClicked(false)}
//                 aria-label="Add new account"
//               >
//                 +
//               </button>
//               <div className="tooltip">Add Account</div>
//             </div>
//           </div>
//         </div>

//         {/* Menu Items */}
//         <nav>
//         <ul className="menu">
//         <li><i className="bi bi-house-door"></i> Home</li>
//         <li><i className="bi bi-person"></i> Profile</li>
//         <li>
//             <i className="bi bi-folder"></i> Projects <span className="badge">3</span>
//         </li>
//         <li><i className="bi bi-receipt"></i> Subscription</li>
//         <li><i className="bi bi-shield-lock"></i> Security</li>
//         <li><i className="bi bi-gear"></i> Account settings</li>
//         </ul>
//         {/* Promo Card */}
//         <div className="promo-card">
//         <h3>35% OFF</h3>
//         <p>Power up Productivity!</p>
//         <button className="promo-btn">Upgrade to Pro</button>
//         <img src="https://assets.minimals.cc/public/assets/illustrations/illustration-rocket-small.webp" />
//         </div>

//         </nav>
//         </div>

//         {/* Logout Button */}
//         <button className="logout-btn" aria-label="Logout">
//           Logout
//         </button>
//       </aside>

//       {/* Overlay - Closes Sidebar When Clicked */}
//       {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} role="button" tabIndex="0"></div>}
//     </div>
//   );
// };

// export default ProfileMenu;


































import React, { useState, useEffect } from "react";
import "./ProfileMenu.scss";
import "bootstrap-icons/font/bootstrap-icons.css";


const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

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

  return (
    <div className="profile-container">
      {/* Profile Button */}
      <button className="profile-btn" onClick={() => setIsOpen(true)} aria-label="Open profile menu">
        <img src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp" alt="Profile" className="profile-img" />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close profile menu">
          &times;
        </button>

        {/* Profile Header */}
        <div className="profile-content">
        <div className="profile-header">
        <div className="avatar-ring"></div> 
          <img src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp" alt="User" className="user-avatar" />
          <h3>Jaydon Frankie</h3>
          <p>demo@minimals.cc</p>

          {/* Avatar Group */}
          <div className="avatar-group">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className="avatar-wrapper"
                onMouseEnter={() => setHoveredAvatar(avatar.id)}
                onMouseLeave={() => setHoveredAvatar(null)}
              >
                <img src={avatar.image} alt={avatar.name} className="avatar" />
                {hoveredAvatar === avatar.id && <div className="tooltip">Switch to: {avatar.name}</div>}
              </div>
            ))}

            {/* Add Avatar Button with Hover & Click Effect */}
            <div className="add-avatar-wrapper">
              <button
                className={`add-avatar ${isClicked ? "clicked" : ""}`}
                onMouseDown={() => setIsClicked(true)}
                onMouseUp={() => setIsClicked(false)}
                onBlur={() => setIsClicked(false)}
                aria-label="Add new account"
              >
                +
              </button>
              <div className="tooltip">Add Account</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav>
        <ul className="menu">
        <li><i className="bi bi-house-door"></i> Home</li>
        <li><i className="bi bi-person"></i> Profile</li>
        <li>
            <i className="bi bi-folder"></i> Projects <span className="badge">3</span>
        </li>
        <li><i className="bi bi-receipt"></i> Subscription</li>
        <li><i className="bi bi-shield-lock"></i> Security</li>
        <li><i className="bi bi-gear"></i> Account settings</li>
        </ul>
        {/* Promo Card */}
        <div className="promo-card">
        <h3>35% OFF</h3>
        <p>Power up Productivity!</p>
        <button className="promo-btn">Upgrade to Pro</button>
        <img src="https://assets.minimals.cc/public/assets/illustrations/illustration-rocket-small.webp" />
        </div>

        </nav>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" aria-label="Logout">
          Logout
        </button>
      </aside>

      {/* Overlay - Closes Sidebar When Clicked */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} role="button" tabIndex="0"></div>}
    </div>
  );
};

export default ProfileMenu;

