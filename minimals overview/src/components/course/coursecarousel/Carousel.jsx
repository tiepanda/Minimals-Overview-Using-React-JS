import React, { useState, useRef } from "react";
import "./carousel.css";

// Sliding Data
const SlidingData = {
  slide: {
    slideData: [
      {
        slideImage: "featured-course-1.webp",
        slideTime: "1h 40m",
        slideContact: 497,
        slideTitle: "Introduction to Python Programming",
        slidePrice: "83,74 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
      {
        slideImage: "featured-course-2.webp",
        slideTime: "1h 40m",
        slideContact: 763,
        slideTitle: "Digital Marketing Fundamentals",
        slidePrice: "97,14 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
      {
        slideImage: "featured-course-3.webp",
        slideTime: "1h 40m",
        slideContact: 684,
        slideTitle: "Data Science with R",
        slidePrice: "68,71 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
      {
        slideImage: "featured-course-4.webp",
        slideTime: "1h 40m",
        slideContact: 451,
        slideTitle: "Graphic Design Essentials",
        slidePrice: "85,21 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
      {
        slideImage: "featured-course-5.webp",
        slideTime: "1h 40m",
        slideContact: 433,
        slideTitle: "Financial Planning for Beginners",
        slidePrice: "52,17 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
      {
        slideImage: "featured-course-6.webp",
        slideTime: "1h 40m",
        slideContact: 463,
        slideTitle: "Human Resource Management Basics",
        slidePrice: "25,18 €",
        slideYear: "/ year",
        slideButton: "Join",
      },
    ],
  },
};


function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 3;

  const totalSlides = SlidingData.slide.slideData.length;

  // Handle Next Slide
  const nextSlide = () => {
    if (startIndex < totalSlides - visibleSlides) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle Previous Slide
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Mouse dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Mouse Down (Start Dragging)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(startIndex);
  };

  // Mouse Move (Dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) / 200; // Adjust sensitivity
    let newIndex = scrollLeft - walk;
    
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalSlides - visibleSlides) newIndex = totalSlides - visibleSlides;

    setStartIndex(Math.round(newIndex));
  };

  // Mouse Up (Stop Dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <div className="container-fluid mt-5 p-4">
        <div className="row">
          <div className="col-12">

            <div>

              <div className="slide-Header">
                <h6 className="sliding-Heading">Featured course</h6>
                <div className="left-right-container">
                  <button className="material-icons" onClick={prevSlide} disabled={startIndex === 0}>
                    keyboard_arrow_left
                  </button>
                  <button className="material-icons" onClick={nextSlide} disabled={startIndex >= totalSlides - visibleSlides}>
                    keyboard_arrow_right
                  </button>
                </div>
              </div>
              
              <div ref={sliderRef} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                >
                <div className="slide-container">
                  <div className="slide-carousel" style={{ transform: `translateX(-${startIndex * (100 / visibleSlides)}%)` }}>
                    {SlidingData.slide.slideData.map((slide, index) => (
                      <div key={index} className="main-slide-container">
                        <ul className="slide-content">
                          <li className="main-sList-content">
                            <div className="sList-item-container">
                              <div className="sList-image-container">
                                <span className="sList-span">
                                  <img className="sList-image" src={`../src/assets/images/Course-Images/course-feature/${slide.slideImage}`} draggable="false" />
                                </span>
                              </div>

                              <div className="sList-text-container">
                                <div className="sList-timing-container">
                                  <span className="sList-timing">{slide.slideTime}</span>
                                  <span className="sList-contact">{slide.slideContact}</span>
                                </div>

                                <a className="sList-Heading">{slide.slideTitle}</a>

                                <div className="sList-price-container">
                                  <span className="sList-price">{slide.slidePrice}</span>
                                  <span className="sList-year">{slide.slideYear}</span>
                                  <button className="sList-button">{slide.slideButton}</button>
                                </div>
                              </div>
                              
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
