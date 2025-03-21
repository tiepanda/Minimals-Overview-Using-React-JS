

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppDashboard from './pages/AppDashboard'
import Sidebar from "./pages/Sidebar/Sidebar";
import BookingDashboard from "./pages/BookingDashboard";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSidebarToggle = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <>
    <div className="app-container">
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className={`main-content ${
          sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
        }`}
        >
        {/* <Navbar /> */}
        <BookingDashboard />
        <AppDashboard/>
      </div>
    </div>
  
    </>
  )
}

export default App;
