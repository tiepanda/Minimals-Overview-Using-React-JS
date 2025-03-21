import React, { useState, useRef, useEffect } from "react";
import "./NewestBooking.css"; // Importing the new CSS file for styles

import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const NewestBooking = ({ bookings, onFilterChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [filterType, setFilterType] = useState("default");
  const containerRef = useRef(null);

  // Calculate the visible items based on container width
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(1);
      else if (width < 768) setVisibleItems(2);
      else if (width < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    if (currentIndex < bookings.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle filter change
  const handleFilterChange = (type) => {
    setFilterType(type);
    if (onFilterChange) {
      onFilterChange(type);
    }
    // Reset to first slide when filter changes
    setCurrentIndex(0);
  };

  // Custom mouse swipe handlers
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    const diff = startX - e.clientX;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  };

  // Touch swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return (
    <div className="booking-container">
      <div className="booking-header">
        <div className="flex flex-col col-8">
          <h1 className=" " style={{ fontSize: 19 }}>
            Newest booking
          </h1>
          <h6 className="" style={{ fontSize: 14, color: "gray" }}>
            {bookings.length} bookings
          </h6>
        </div>

        {/* Added filter buttons */}
        <div className="col-3 d-flex align-items-center">
          <select
            className="form-select form-select-sm"
            value={filterType}
            onChange={(e) => handleFilterChange(e.target.value)}
            style={{ fontSize: 14 }}
          >
            <option value="default">Default</option>
            <option value="newest">Newest First</option>
            <option value="price-high">Price High-Low</option>
            <option value="price-low">Price Low-High</option>
          </select>
        </div>

        <div className="ps-2 col-1">
          <button
            onClick={prevSlide}
            variant="transperent"
            size="sm"
            aria-label="Previous booking"
            disabled={currentIndex === 0}
            className={`  ${
              currentIndex === 0
                ? "text-gray-300"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            style={{ border: "none", backgroundColor: "#ffffff00" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= bookings.length - visibleItems}
            className={`  ${
              currentIndex >= bookings.length - visibleItems
                ? "text-gray"
                : "text-black onClick:bg-gray-100"
            }`}
            style={{ border: "none", backgroundColor: "#ffffff00" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="px-4 pb-4"
          ref={containerRef}
          {...swipeHandlers}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            style={{
              margin: "auto",
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <motion.div
              initial={false}
              style={{
                display: "flex",
                userSelect: "none",
                backfaceVisibility: "hidden",
                touchAction: "pan-y pinch-zoom",
                marginLeft: "calc(-24px)",
              }}
              animate={{
                x: -currentIndex * (100 / visibleItems) + "%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {bookings.map((booking, index) => (
                <motion.div
                  key={index}
                  className="booking-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="overflow-hidden h-full">
                    {/* User info */}
                    <div className="p-3">
                      <div
                        className="flex items-center gap-2 mb-2"
                        style={{
                          gap: "calc(2* var(--spacing))",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={booking.avatar}
                          alt={booking.name}
                          className="w-6 h-6 rounded-full object-cover"
                          draggable="false"
                          style={{
                            position: "relative",
                            display: "flex",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: "40px",
                            height: "40px",
                            fontFamily:
                              "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                            fontSize: "1.25rem",
                            lineHeight: 1,
                            borderRadius: "50%",
                            overflow: "hidden",
                            userSelect: "none",
                          }}
                        />
                        <div
                          style={{
                            flex: "1 1 auto",
                            minWidth: "0px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            className="font-medium text-sm text-gray-800"
                            style={{
                              margin: "0px",
                              fontFamily:
                                "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                              fontWeight: 600,
                              fontSize: "0.875rem",
                              lineHeight: "1.57143",
                            }}
                          >
                            {booking.name}
                          </h3>
                          <p
                            className="text-xs text-gray-500"
                            style={{
                              marginRight: "0px",
                              marginBottom: "0px",
                              marginLeft: "0px",
                              marginTop: "calc(0.5 * var(--spacing))",
                              fontFamily:
                                "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                              fontWeight: 400,
                              fontSize: "0.75rem",
                              lineHeight: "1.5",
                              color: "var(--palette-text-disabled)",
                            }}
                          >
                            {booking.date}
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex gap-3 text-xs text-gray-500"
                        style={{
                          rowGap: "calc(1.5 * var(--spacing))",
                          columnGap: "calc(2 * var(--spacing))",
                          display: "flex",
                          flexWrap: "wrap",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          fontFamily:
                            "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                          fontWeight: 400,
                          fontSize: "0.75rem",
                          lineHeight: "1.5",
                          color: "var(--palette-text-secondary)",
                        }}
                      >
                        <div
                          className="flex items-center"
                          style={{
                            gap: "calc(0.5 * var(--spacing))",
                            display: "flex",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {booking.days} days {booking.nights} nights
                        </div>

                        <div
                          className="flex items-center"
                          style={{
                            gap: "calc(0.5 * var(--spacing))",
                            display: "flex",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          {booking.guests} guests
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-44">
                      <div
                        className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center"
                        style={{
                          height: "24px",
                          minWidth: "24px",
                          lineHeight: "0",
                          cursor: "default",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          display: "inline-flex",
                          WebkitBoxPack: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--palette-common-white)",
                          backgroundColor: "var(--palette-text-primary)",
                          right: "16px",
                          zIndex: 9,
                          bottom: "16px",
                          position: "absolute",
                          whiteSpace: "nowrap",
                          gap: "calc(0.75 * var(--spacing))",
                          padding:
                            "calc(0 * var(--spacing)) calc(0.75 * var(--spacing))",
                          borderRadius: "6px",
                          transition: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {booking.price ? (
                          <>
                            <span className="mr-1 w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                            ${booking.price}
                          </>
                        ) : null}
                      </div>
                      <div
                        style={{
                          padding: "2%",
                          position: "relative",
                        }}
                      >
                        <img
                          src={booking.image}
                          alt="Destination"
                          draggable="false"
                          className="w-full h-full object-cover "
                          style={{
                            maxWidth: "100%",
                            overflow: "hidden",
                            position: "relative",
                            display: "inline-block",
                            verticalAlign: "bottom",
                            aspectRatio: "var(--aspect-ratio)",
                            width: "100%",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestBooking;
