// import React, { useState, useEffect } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
// import "./InvoiceTable.scss"; // Import styles

// const invoices = [
//   { id: "INV-1990", category: "Android", price: "$83.74", status: "Paid" },
//   { id: "INV-1991", category: "Mac", price: "$97.14", status: "Out of date" },
//   { id: "INV-1992", category: "Windows", price: "$68.71", status: "Progress" },
//   { id: "INV-1993", category: "Android", price: "$85.21", status: "Paid" },
//   { id: "INV-1994", category: "Mac", price: "$52.17", status: "Paid" },
// ];

// const apps = [
//   {
//     name: "Microsoft Office 365",
//     price: "Free",
//     downloads: "9.91k",
//     size: "9.68 Mb",
//     rating: "9.91k",
//     logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-1.webp"
//   },
//   {
//     name: "Opera",
//     price: "Free",
//     downloads: "1.95k",
//     size: "1.9 Mb",
//     rating: "1.95k",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg"
//   },
//   {
//     name: "Adobe Acrobat Reader DC",
//     price: "$68.71",
//     downloads: "9.12k",
//     size: "8.91 Mb",
//     rating: "9.12k",
//     logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-3.webp"
//   },
//   {
//     name: "Joplin",
//     price: "Free",
//     downloads: "6.98k",
//     size: "6.82 Mb",
//     rating: "6.98k",
//     logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-4.webp"
//   },
//   {
//     name: "Topaz Photo AI",
//     price: "$52.17",
//     downloads: "8.49k",
//     size: "8.29 Mb",
//     rating: "8.49k",
//     logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-5.webp"
//   }
// ];

// // ActionMenu with smooth dropdown effect
// const ActionMenu = ({ isActive, setActiveMenu, invoiceId }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (isActive) {
//       setTimeout(() => setIsVisible(true), 10); // Small delay for a smooth effect
//     } else {
//       setIsVisible(false);
//     }
//   }, [isActive]);

//   const handleClick = () => {
//     setActiveMenu(isActive ? null : invoiceId);
//   };

//   return (
//     <div className="action-menu-container">
//       <span className="action-menu" onClick={handleClick}>⋮</span>
//       <div className={`dropdown-menu ${isActive && isVisible ? "active" : ""}`}>
//         <ul>
//           <li><i className="bi bi-download"></i> Download</li>
//           <li><i className="bi bi-printer"></i> Print</li>
//           <li><i className="bi bi-share"></i> Share</li>
//           <li className="delete"><i className="bi bi-trash"></i> Delete</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("7days");
//   const [activeMenu, setActiveMenu] = useState(null);

//   return (
//     <div className="dashboard-container">
//       <div className="invoice-container">
//         <h2 className="invoice-title">New Invoice</h2>
//         <table className="invoice-table">
//           <thead>
//             <tr>
//               <th>Invoice ID</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoices.map((invoice) => (
//               <tr key={invoice.id}>
//                 <td>{invoice.id}</td>
//                 <td>{invoice.category}</td>
//                 <td>{invoice.price}</td>
//                 <td>
//                   <span className={`status ${invoice.status.toLowerCase().replace(" ", "-")}`}>
//                     {invoice.status}
//                   </span>
//                 </td>
//                 <td>
//                   <ActionMenu isActive={activeMenu === invoice.id} setActiveMenu={setActiveMenu} invoiceId={invoice.id} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="view-all">View all <i className="bi bi-chevron-right"></i></div>
//       </div>

//       <div className="related-apps-container">
//         <h3>Related Applications</h3>
//         <div className="tabs-container">
//           <button className={activeTab === "7days" ? "tab active" : "tab"} onClick={() => setActiveTab("7days")}>
//             Top 7 days
//           </button>
//           <button className={activeTab === "30days" ? "tab active" : "tab"} onClick={() => setActiveTab("30days")}>
//             Top 30 days
//           </button>
//           <button className={activeTab === "alltimes" ? "tab active" : "tab"} onClick={() => setActiveTab("alltimes")}>
//             All times
//           </button>
//         </div>

// <ul className="app-list">
//   {apps.map((app, index) => (
//     <li key={index} className="app-item">
//       <img src={app.logo} alt={app.name} className="app-logo" />
//       <div className="app-details">
//         <span className="app-name">
//           {app.name} 
//           {(app.name === "Adobe Acrobat Reader DC" || app.name === "Topaz Photo AI") && (
//             <span className="app-price paid">&nbsp; {app.price}</span>
//           )}
//         </span>
//         {app.name !== "Adobe Acrobat Reader DC" && app.name !== "Topaz Photo AI" && (
//           <span className={`app-price ${app.price === "Free" ? "free" : "paid"}`}>{app.price}</span>
//         )}
        
//         <div className="app-meta">
//           <span>👍 {app.downloads}</span> •
//           <span>💾 {app.size}</span> •
//           <span>⭐ {app.rating}</span>
//         </div>
//       </div>
//     </li>
//   ))}
// </ul>



//       </div>
//     </div>
//   );
// };

// export default Dashboard;





















import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./InvoiceTable.scss"; // Import styles
import { FaDownload, FaSave } from "react-icons/fa"; // Importing icons

const invoices = [
  { id: "INV-1990", category: "Android", price: "$83.74", status: "Paid" },
  { id: "INV-1991", category: "Mac", price: "$97.14", status: "Out of date" },
  { id: "INV-1992", category: "Windows", price: "$68.71", status: "Progress" },
  { id: "INV-1993", category: "Android", price: "$85.21", status: "Paid" },
  { id: "INV-1994", category: "Mac", price: "$52.17", status: "Paid" },
];

const apps = [
  {
    name: "Microsoft Office 365",
    price: "Free",
    downloads: "9.91k",
    size: "9.68 Mb",
    rating: "9.91k",
    logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-1.webp"
  },
  {
    name: "Opera",
    price: "Free",
    downloads: "1.95k",
    size: "1.9 Mb",
    rating: "1.95k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg"
  },
  {
    name: "Adobe Acrobat Reader DC",
    price: "$68.71",
    downloads: "9.12k",
    size: "8.91 Mb",
    rating: "9.12k",
    logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-3.webp"
  },
  {
    name: "Joplin",
    price: "Free",
    downloads: "6.98k",
    size: "6.82 Mb",
    rating: "6.98k",
    logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-4.webp"
  },
  {
    name: "Topaz Photo AI",
    price: "$52.17",
    downloads: "8.49k",
    size: "8.29 Mb",
    rating: "8.49k",
    logo: "https://assets.minimals.cc/public/assets/icons/apps/ic-app-5.webp"
  }
];

// ActionMenu with smooth dropdown effect
const ActionMenu = ({ isActive, setActiveMenu, invoiceId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setIsVisible(true), 10); // Small delay for a smooth effect
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const handleClick = () => {
    setActiveMenu(isActive ? null : invoiceId);
  };

  return (
    <div className="action-menu-container">
      <span className="action-menu" onClick={handleClick}>⋮</span>
      <div className={`dropdown-menu ${isActive && isVisible ? "active" : ""}`}>
        <ul>
          <li><i className="bi bi-download"></i> Download</li>
          <li><i className="bi bi-printer"></i> Print</li>
          <li><i className="bi bi-share"></i> Share</li>
          <li className="delete"><i className="bi bi-trash"></i> Delete</li>
        </ul>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("7days");
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="invoice-container">
        <h2 className="invoice-title">New Invoice</h2>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.category}</td>
                <td>{invoice.price}</td>
                <td>
                  <span className={`status ${invoice.status.toLowerCase().replace(" ", "-")}`}>
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <ActionMenu isActive={activeMenu === invoice.id} setActiveMenu={setActiveMenu} invoiceId={invoice.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="view-all">View all <i className="bi bi-chevron-right"></i></div>
      </div>

      <div className="related-apps-container">
        <h3>Related Applications</h3>
        <div className="tabs-container">
          <button className={activeTab === "7days" ? "tab active" : "tab"} onClick={() => setActiveTab("7days")}>
            Top 7 days
          </button>
          <button className={activeTab === "30days" ? "tab active" : "tab"} onClick={() => setActiveTab("30days")}>
            Top 30 days
          </button>
          <button className={activeTab === "alltimes" ? "tab active" : "tab"} onClick={() => setActiveTab("alltimes")}>
            All times
          </button>
        </div>

        <ul className="app-list">
  {apps.map((app, index) => (
    <li key={index} className="app-item">
      <img src={app.logo} alt={app.name} className="app-logo" />
      <div className="app-details">
        <span className="app-name">
          {app.name} 
          <span className={`app-price ${app.price === "Free" ? "free" : "paid"}`}>
            &nbsp; {app.price}
          </span>
        </span>
        
        <div className="app-meta">
        <span><FaDownload /> {app.downloads}</span> •
          <span><FaSave /> {app.size}</span> •
          <span>⭐ {app.rating}</span>
        </div>
      </div>
    </li>
  ))}
</ul>




      </div>
    </div>
  );
};

export default Dashboard;
