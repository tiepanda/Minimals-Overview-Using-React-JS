import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import {
  BsThreeDotsVertical,
  BsDownload,
  BsPrinter,
  BsShare,
  BsTrash,
} from "react-icons/bs";

const BookingDetails = ({ bookingData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return (
          <span className=" fw-bolder badge bg-success-subtle text-success rounded-pill px-2 py-1">
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="fw-bolder badge bg-warning-subtle text-warning rounded-pill px-2 py-1">
            Pending
          </span>
        );
      case "cancelled":
        return (
          <span className="fw-bolder badge bg-danger-subtle text-danger rounded-pill px-2 py-1">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="fw-bolder badge bg-secondary-subtle text-secondary rounded-pill px-2 py-1">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="card shadow mb-4 rounded-4 " style={{ border: "none" }}>
      <div className="card-header bg-white border-0 py-3">
        <h5 className="mb-0">Booking details</h5>
      </div>
      <div className="card-body p-0">
        <Table responsive hover className="mb-0">
          <thead className="">
            <tr>
              <th
                className="border-0 py-3 ps-4 text-black-50 "
                style={{ fontSize: 14, backgroundColor: "#f4f6f8" }}
              >
                Destination
              </th>
              <th
                className="border-0 text-black-50 py-3"
                style={{ fontSize: 14, backgroundColor: "#f4f6f8" }}
              >
                Customer
              </th>
              <th
                className="border-0 text-black-50 py-3"
                style={{ fontSize: 14, backgroundColor: "#f4f6f8" }}
              >
                Check in
              </th>
              <th
                className="border-0 text-black-50 py-3"
                style={{ fontSize: 14, backgroundColor: "#f4f6f8" }}
              >
                Check out
              </th>
              <th
                className="border-0 text-black-50 py-3"
                style={{ fontSize: 14, backgroundColor: "#f4f6f8" }}
              >
                Status
              </th>
              <th
                className="border-0 text-end pe-4"
                style={{ backgroundColor: "#f4f6f8" }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={index}>
                <td className="ps-4 py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={booking.destinationImage}
                      alt={booking.destination}
                      className="rounded-3 me-3"
                      width="48"
                      height="48"
                      style={{ objectFit: "cover" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "400" }}>
                      {booking.destination}
                    </span>
                  </div>
                </td>
                <td>
                  <div>
                    <div
                      className="text-muted"
                      style={{ fontSize: "12px", fontWeight: "500" }}
                    >
                      {booking.customerName}
                    </div>
                    <div
                      className="text-muted small"
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      {booking.customerPhone}
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div
                      className="text-muted"
                      style={{ fontSize: "12px", fontWeight: "500" }}
                    >
                      {booking.checkInDate}
                    </div>
                    <div
                      className="text-muted small"
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      {booking.checkInTime}
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div
                      className="text-muted"
                      style={{ fontSize: "12px", fontWeight: "500" }}
                    >
                      {booking.checkOutDate}
                    </div>
                    <div
                      className="text-muted small"
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      {booking.checkOutTime}
                    </div>
                  </div>
                </td>
                <td
                  className=" py-3 "
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  {getStatusBadge(booking.status)}
                </td>
                <td className="text-end py-1 pe-4">
                  <div className="position-relative">
                    <button
                      className="btn btn-link text-secondary"
                      onClick={() => toggleDropdown(index)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {openDropdown === index && (
                      <div
                        className="dropdown-menu dropdown-menu-end show"
                        style={{ minWidth: "150px" }}
                      >
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Download", booking.id)}
                        >
                          <BsDownload className="me-2" />
                          <span>Download</span>
                        </button>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Print", booking.id)}
                        >
                          <BsPrinter className="me-2" />
                          <span>Print</span>
                        </button>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Share", booking.id)}
                        >
                          <BsShare className="me-2" />
                          <span>Share</span>
                        </button>
                        <div className="dropdown-divider"></div>
                        <button
                          className="dropdown-item d-flex align-items-center text-danger"
                          onClick={() => console.log("Delete", booking.id)}
                        >
                          <BsTrash className="me-2" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end p-3">
          <a
            href="#"
            className="text-black fw-bold "
            style={{ fontSize: "12px", textDecoration: "none" }}
          >
            View all <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
