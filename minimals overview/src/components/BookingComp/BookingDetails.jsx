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
                  <div className="">
                    <button
                      className="btn btn-link text-secondary"
                      onClick={() => toggleDropdown(index)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {openDropdown === index && (
                      <div
                        className="dropdown-menu dropdown-menu-end show"
                        style={{
                          marginLeft: "-110px",
                          marginTop: "-50px",
                          color: "#000B8D",
                          position: "absolute",
                          minWidth: "16px",
                          minHeight: "16px",
                          maxWidth: "calc(100% - 32px)",
                          maxHeight: "calc(100% - 32px)",
                          backgroundImage:
                            "url(/src/assets/images/dropDown-gradient/blueTopRight.svg ),url(/src/assets/images/dropDown-gradient/blueTopLeft.svg )",
                          backgroundSize: "50%, 50%",
                          backgroundRepeat: "no-repeat",
                          backdropFilter: "blur(20px)",
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                          transition:
                            "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                          outline: "0px",
                          backgroundPosition: "right top, left bottom",
                          padding: "8px",
                          borderRadius: "10px",
                          overflow: "inherit",
                        }}
                      >
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Download", booking.id)}
                          style={{ gap: "10px" }}
                        >
                          {/* download icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--eva minimal__iconify__root css-1bkxjvr"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <defs>
                              <path
                                id="iconifyReact36"
                                fill="currentColor"
                                d="M21.9 11c0-.11-.06-.22-.09-.33a4 4 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37s-.21-.2-.32-.3L20 8l-.36-.24a4 4 0 0 0-.44-.23l-.39-.18a4 4 0 0 0-.5-.15a3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09a4 4 0 0 0-.5.15l-.39.18a4 4 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37s-.18.23-.26.36s-.16.29-.24.44s-.13.25-.18.37a4 4 0 0 0-.18.57c0 .11-.07.22-.09.33A5 5 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a6 6 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a1 1 0 0 0 .05.08L3 15a5 5 0 0 0 4 2a2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.9 1.9 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27a2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a1 1 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a6 6 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5 5 0 0 0-.1-1"
                              ></path>
                              <path
                                id="iconifyReact37"
                                fill="currentColor"
                                d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44"
                              ></path>
                            </defs>
                            <use href="#iconifyReact36"></use>
                            <use href="#iconifyReact37"></use>
                            <use href="#iconifyReact36"></use>
                            <use href="#iconifyReact37"></use>
                          </svg>
                          {/* <BsDownload className="me-2" /> */}
                          <span
                            style={{
                              opacity: "80%",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Download
                          </span>
                        </button>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Print", booking.id)}
                          style={{ gap: "10px" }}
                        >
                          {/* <BsPrinter className="me-2" /> */}
                          {/* Print icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--solar minimal__iconify__root css-1bkxjvr"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M17.121 21.121C18 20.243 18 18.828 18 16v-3.34c-1.477-.502-3.458-.91-6-.91s-4.523.408-6 .91V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.492.493 1.153.71 2.136.804C5 17.366 5 16.748 5 16.071v-3.029l-.193.085a.75.75 0 0 1-.614-1.368c1.722-.773 4.288-1.51 7.807-1.51s6.085.737 7.807 1.51a.75.75 0 1 1-.614 1.368L19 13.042v3.029c0 .677 0 1.295-.015 1.854c.983-.095 1.644-.311 2.136-.804C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m1.12-3.121C16.243 2 14.829 2 12 2s-4.243 0-5.122.879c-.492.492-.709 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.141c.678 0 1.296 0 1.855.015c-.095-.983-.312-1.644-.804-2.136"
                            ></path>
                          </svg>
                          <span
                            style={{
                              opacity: "80%",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Print
                          </span>
                        </button>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          onClick={() => console.log("Share", booking.id)}
                          style={{ gap: "10px" }}
                        >
                          {/* <BsShare className="me-2" /> */}
                          {/* share icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--solar minimal__iconify__root css-1bkxjvr"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span
                            style={{
                              opacity: "80%",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Share
                          </span>
                        </button>
                        <div className="dropdown-divider"></div>
                        <button
                          className="dropdown-item d-flex align-items-center text-danger"
                          onClick={() => console.log("Delete", booking.id)}
                          style={{ gap: "10px" }}
                        >
                          {/* <BsTrash className="me-2" /> */}
                          {/* Delete icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--solar minimal__iconify__root css-1bkxjvr"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877"
                            ></path>
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span
                            style={{
                              opacity: "80%",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Delete
                          </span>
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
