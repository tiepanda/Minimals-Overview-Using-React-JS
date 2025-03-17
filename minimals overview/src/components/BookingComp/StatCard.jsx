import React from "react";
import { Card } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

const StatCard = ({ title, value, percentage, isPositive, cardType }) => {
  // Determine color scheme based on positive/negative percentage
  const percentageColor = isPositive ? "rgb(34, 154, 22)" : "rgb(255, 72, 66)";
  const percentageBgColor = isPositive
    ? "rgba(84, 214, 44, 0.16)"
    : "rgba(255, 72, 66, 0.16)";

  // Render different illustrations based on type
  const renderIllustration = () => {
    if (cardType === "booking") {
      return (
        <div
          className="position-relative"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f9fafb",
            borderRadius: "50%",
          }}
        >
          {/* User avatars with chat bubble effect */}
          <div
            className="position-absolute"
            style={{ top: "10%", left: "15%" }}
          >
            <div
              className="rounded-circle bg-white p-1"
              style={{ width: "36px", height: "36px" }}
            >
              <div
                className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                style={{ width: "100%", height: "100%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="position-absolute"
            style={{ top: "40%", right: "5%" }}
          >
            <div
              className="rounded-circle bg-white p-1"
              style={{ width: "36px", height: "36px" }}
            >
              <div
                className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                style={{ width: "100%", height: "100%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="position-absolute"
            style={{ bottom: "10%", left: "20%" }}
          >
            <div
              className="rounded-circle bg-white p-1"
              style={{ width: "36px", height: "36px" }}
            >
              <div
                className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                style={{ width: "100%", height: "100%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Chat lines */}
          <div
            className="position-absolute"
            style={{
              top: "36%",
              left: "39%",
              width: "40px",
              height: "4px",
              backgroundColor: "#e1e1e1",
              borderRadius: "2px",
            }}
          ></div>
          <div
            className="position-absolute"
            style={{
              top: "46%",
              left: "25%",
              width: "50px",
              height: "4px",
              backgroundColor: "#e1e1e1",
              borderRadius: "2px",
            }}
          ></div>
          <div
            className="position-absolute"
            style={{
              top: "56%",
              left: "35%",
              width: "30px",
              height: "4px",
              backgroundColor: "#e1e1e1",
              borderRadius: "2px",
            }}
          ></div>
        </div>
      );
    } else if (cardType === "sold") {
      return (
        <div
          className="position-relative"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f9fafb",
            borderRadius: "50%",
          }}
        >
          <div
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <circle cx="12" cy="14" r="4"></circle>
              <path d="M12 10v8"></path>
              <path d="M8 14h8"></path>
            </svg>
          </div>
        </div>
      );
    } else if (cardType === "canceled") {
      return (
        <div
          className="position-relative"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f9fafb",
            borderRadius: "50%",
          }}
        >
          <div
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="8" y1="14" x2="8" y2="14"></line>
              <line x1="12" y1="14" x2="12" y2="14"></line>
              <line x1="16" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="8" y2="18"></line>
              <line x1="12" y1="18" x2="12" y2="18"></line>
              <line x1="16" y1="18" x2="16" y2="18"></line>
            </svg>
          </div>
        </div>
      );
    }
  };

  // Format value to add 'k' if needed
  const formattedValue = value.toString().includes("k") ? value : `${value}k`;

  return (
    <Card
      className="border-0 shadow-sm"
      style={{ borderRadius: "16px", height: "152px", boxShadow: "10px 10px" }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center p-4">
        <div>
          <h6 className=" mb-1" style={{ fontSize: "14px", color: "gray" }}>
            {title}
          </h6>
          <h5 className="fw-bold mb-2" style={{ fontSize: 32 }}>
            {formattedValue}
          </h5>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                backgroundColor: percentageBgColor,
                color: percentageColor,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
            </div>
            <span style={{ fontSize: "14px", fontWeight: "650" }}>
              {isPositive ? "+" : ""}
              {percentage}%
            </span>
          </div>
        </div>

        {renderIllustration()}
      </Card.Body>
    </Card>
  );
};

export default StatCard;
