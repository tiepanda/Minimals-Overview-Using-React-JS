import React, { useState } from "react";
import "../dashboard/Dashboard.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "cover-4.jpg",
    tag: "FEATURED APP",
    title: "The Rise of Remote Work: Benefits, Challenges...",
    desc: "The aroma of freshly brewed coffee filled the air, awakening my...",
  },
  {
    img: "/assets/featured2.jpg",
    tag: "FEATURED APP",
    title: "Understanding Blockchain Technology: Beyond Cryptocurrency",
    desc: "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
  },
  {
    img: "/assets/featured3.jpg",
    tag: "FEATURED APP",
    title: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    desc: "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
  },
];

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    
      
    <div className="dashboard-container">
      
      {/* Welcome Card */}
      <div className="welcome-card">
        <div className="welcome-content">
          <h2>
            Welcome back <span role="img" aria-label="wave">👋</span>
          </h2>
          <h1>Jaydon Frankie</h1>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything.
          </p>
          <button className="go-now-btn">Go now</button>
        </div>
        <div className="welcome-image">
          <img src="https://assets.minimals.cc/public/assets/illustrations/characters/character-3.webp" alt="Illustration" />
        </div>
      </div>

<div className="featured-card">
  {/* Display Slide Content */}
  <div className="featured-content">
    <span className="tag">{slides[currentSlide].tag}</span>
    <h3>{slides[currentSlide].title}</h3>
    <p>{slides[currentSlide].desc}</p>
  </div>

  {/* Navigation Arrows */}
  <div className="nav-arrows">
    <button className="arrow left" onClick={prevSlide}>
      <FaChevronLeft />
    </button>
    <button className="arrow right" onClick={nextSlide}>
      <FaChevronRight />
    </button>
  </div>

  {/* Slide Indicators */}
  <div className="slide-dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${currentSlide === index ? "active" : ""}`}
        onClick={() => setCurrentSlide(index)}
      ></span>
    ))}
  </div>
</div>

    </div>
  );
};

export default Dashboard;

