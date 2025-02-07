import React, { useState, useEffect } from "react";
import "./card.css";

const cardData = [
  {
    name: "SUZANA",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.",
  },
  {
    name: "LÍVIA",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face2.jpg",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "KÁTIA",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face3.jpg",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "MATHEUS",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face4.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "SOLANGE",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face5.jpg",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "HELEN",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face6.jpg",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    name: "REGINA",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face7.jpg",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    name: "THAÍS",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face8.jpg",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    name: "SOLANGE",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face9.jpg",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "HELEN",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face10.jpg",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    name: "REGINA",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face11.jpg",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    name: "THAÍS",
    role: "SAC FORMER PRESIDENT",
    image: "/images/face/face12.jpg",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

const Card = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const totalSlides = Math.ceil(cardData.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="card-container">
      <div className="card-section">
        <div className="card-wrapper">
          {cardData.slice(visibleIndex * 4, visibleIndex * 4 + 4).map((card, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <p className="large-quote">“</p>
                <p className="testimonial-text">{card.text}</p>
              </div>
              <div className="testimonial-footer">
                <img src={card.image} alt={card.name} className="profile-pic" />
                <p className="user-name">{card.name}</p>
                <p className="user-role">{card.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dots-wrapper">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span key={i} className={`dot ${i === visibleIndex ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
