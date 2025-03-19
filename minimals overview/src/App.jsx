import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./pages/Sidebar/Sidebar";
import Navbar from "./components/BookingComp/Navbar";
import BookingDashboard from "./pages/BookingDashboard";

// Course Component
import Course from "./pages/Course";
import NavBar from "./pages/nav-bar/NavBar";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSidebarToggle = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <div className="app-container">
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className={`main-content ${
          sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
        }`}
      >
        {/* <Navbar /> */}
        <NavBar />

        <BookingDashboard />
        <Course />
      </div>
    </div>
  );
}

export default App;
