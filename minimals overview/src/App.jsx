import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppDashboard from "./pages/AppDashboard";
import Sidebar from "./pages/Sidebar/Sidebar";
import BookingDashboard from "./pages/BookingDashboard";
import Course from "./pages/Course";
import NavBar from "./pages/nav-bar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSidebarToggle = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar onToggle={handleSidebarToggle} />
        <div
          className={`main-content ${
            sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
          }`}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/app" />} />
            <Route path="/app" element={<AppDashboard />} />
            <Route path="/booking" element={<BookingDashboard />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
