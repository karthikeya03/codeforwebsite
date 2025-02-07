import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import styles
import "tailwindcss/tailwind.css";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

const AUTO_SLIDE_INTERVAL = 3000;

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [autoSlidePaused, setAutoSlidePaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (autoSlidePaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [autoSlidePaused, count]);

  // Function to pause auto-sliding and resume after 3 seconds
  const pauseAutoSlide = () => {
    setAutoSlidePaused(true);
    setTimeout(() => setAutoSlidePaused(false), 3000);
  };

  const goPrev = () => {
    setActive((prev) => (prev - 1 + count) % count);
    pauseAutoSlide();
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % count);
    pauseAutoSlide();
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {/* Carousel Images */}
        <div className="carousel">
          {images.map((image, i) => {
            let offset = (i - active + count) % count;
            if (offset > count / 2) offset -= count;
            const maxVisibility = window.innerWidth <= 1024 ? 1 : 3;

            return (
              <div
                key={i}
                className="cardContainer"
                style={{
                  "--active": i === active ? "1" : "0",
                  "--offset": -offset / maxVisibility,
                  "--direction": (-Math.sign(offset)).toString(),
                  "--abs-offset": Math.abs(offset / maxVisibility).toString(),
                  pointerEvents: Math.abs(offset) <= maxVisibility ? "auto" : "none",
                  opacity: Math.abs(offset) > maxVisibility ? "0" : "1",
                  display: Math.abs(offset) > maxVisibility ? "none" : "block",
                  transform: `rotateY(calc(var(--offset) * 40deg)) translateZ(calc(var(--abs-offset) * -20rem)) translateX(calc(var(--direction) * -4rem))`,
                  filter: `blur(calc(var(--abs-offset) * 0.3rem))`,
                }}
                onClick={() => {
                  setActive(i);
                  pauseAutoSlide();
                }}
              >
                <div className="card">
                  <img src={image} alt={`Slide ${i + 1}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button onClick={goPrev} className="arrow-btn">&#9665;</button>
          <div className="dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === active ? "active" : ""}`}
                onClick={() => {
                  setActive(index);
                  pauseAutoSlide();
                }}
              ></button>
            ))}
          </div>
          <button onClick={goNext} className="arrow-btn">&#9655;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
