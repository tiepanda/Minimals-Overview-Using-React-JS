import React, { useState, useRef, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const CustomerReviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const contentRef = useRef(null);

  // Handle previous review with boundary check
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 150);
    }
  };

  // Handle next review with boundary check
  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      setDirection("right");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 150);
    }
  };

  // Reset animation state after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left (next)
      if (currentIndex < reviews.length - 1) {
        handleNext();
      }
    } else if (touchEnd - touchStart > 75) {
      // Swipe right (previous)
      if (currentIndex > 0) {
        handlePrevious();
      }
    }
  };

  // Mouse swipe handlers
  const [mouseStart, setMouseStart] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) {
      const diff = mouseStart - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < reviews.length - 1) {
          handleNext();
          setIsMouseDown(false);
        } else if (diff < 0 && currentIndex > 0) {
          handlePrevious();
          setIsMouseDown(false);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-warning" : "text-secondary"}
          style={{ fontSize: "25px" }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Animation styles based on direction
  const getAnimationStyle = () => {
    if (!isAnimating) return { opacity: 1, transition: "opacity 0.3s ease" };

    return {
      opacity: 0.5,
      transform:
        direction === "right" ? "translateX(-20px)" : "translateX(20px)",
      transition: "all 0.3s ease",
    };
  };

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h6 className="m-0" style={{ fontSize: 18 }}>
            Customer reviews
          </h6>
          <div>
            <Button
              variant="light"
              className="me-1 bg-white"
              style={{ border: "none" }}
              size="sm"
              onClick={handlePrevious}
              aria-label="Previous review"
              disabled={currentIndex === 0}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="light"
              className="bg-white"
              style={{ border: "none" }}
              size="sm"
              onClick={handleNext}
              aria-label="Next review"
              disabled={currentIndex === reviews.length - 1}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <p className="text-secondary mb-6" style={{ fontSize: 14 }}>
          {reviews.length} Reviews
        </p>

        {reviews.length > 0 && (
          <div
            ref={contentRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              userSelect: "none",
              cursor: isMouseDown ? "grabbing" : "grab",
              ...getAnimationStyle(),
            }}
          >
            <div className="d-flex align-items-center mb-0">
              <div className="me-3">
                <img
                  src={`/src/images/avathar/${reviews[currentIndex].avatar}`}
                  alt={`${reviews[currentIndex].name} avatar`}
                  className="rounded-circle"
                  width="42"
                  height="42"
                  style={{ objectFit: "cover" }}
                  draggable="false"
                />
              </div>
              <div>
                <h6 className="mb-0 fw-" style={{ fontSize: 15 }}>
                  {reviews[currentIndex].name}
                </h6>
                <p className="text-secondary mb-0" style={{ fontSize: "10px" }}>
                  Posted {reviews[currentIndex].datePosted}
                </p>
              </div>
            </div>

            <div className="mb-1">
              {renderStars(reviews[currentIndex].rating)}
            </div>

            <p className="mb-2" style={{ fontSize: 15 }}>
              {reviews[currentIndex].comment}
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {reviews[currentIndex].tags.map((tag, index) => (
                <h6
                  key={index}
                  className="rounded-pill px-2 py-1"
                  style={{ fontSize: 14, backgroundColor: "#f5f5f5" }}
                >
                  {tag}
                </h6>
              ))}
            </div>

            <hr
              style={{
                borderWidth: "0px 0px thin",
                borderStyle: "dashed",
              }}
            />
            <div className="d-flex">
              <Button
                variant="outline-danger"
                className="fw-bold me-2"
                style={{
                  borderRadius: "8px",
                  width: "280px",
                  height: "40px",
                  fontSize: 16,
                }}
              >
                Reject
              </Button>
              <Button
                variant="dark"
                className="fw-bold"
                style={{
                  borderRadius: "8px",
                  width: "280px",
                  height: "40px",
                  fontSize: 16,
                }}
              >
                Accept
              </Button>
            </div>
          </div>
        )}

        {/* Navigation indicators */}
        <div className="d-flex justify-content-center mt-3">
          {reviews.map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                margin: "0 4px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#212529" : "#dee2e6",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerReviews;
