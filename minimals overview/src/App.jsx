// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import BookingDashboard from "./pages/BookingDashboard";

// function App() {
//   return (
//     <div className="app-container">
//       <BookingDashboard />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./pages/Sidebar/Sidebar";
import Navbar from "./components/BookingComp/Navbar";
import BookingDashboard from "./pages/BookingDashboard";

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
        <Navbar />
        <BookingDashboard />
      </div>
    </div>
  );
}

export default App;
