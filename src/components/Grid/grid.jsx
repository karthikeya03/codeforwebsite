import React, { useState } from "react";
import "./grid.css";

const objectives = [
  { id: 1, color: "#4ac0c0", img: "/images/cup1.png" },
  { id: 2, color: "#b76ed5", img: "/images/cup2.png" },
  { id: 3, color: "#f7b733", img: "/images/cup3.png" },
  { id: 4, color: "#8377b7", img: "/images/cup4.png" },
  { id: 5, color: "#fc5c65", img: "/images/cup5.png" },
  { id: 6, color: "#62d26f", img: "/images/cup6.png" }
];

const Grid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid-container">
      <img src="/images/aboutus.png" alt="About Us" className="title-image" />

      <div className="grid">
        {objectives.map((obj) => (
          <div
            key={obj.id}
            className="grid-item"
            style={{ backgroundColor: obj.color }}
            onMouseEnter={() => setHovered(obj.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Circular Trophy Image */}
            <div className={`image-circle ${hovered === obj.id ? "hovered" : ""}`}>
              <img src={hovered === obj.id ? "/images/hover.png" : obj.img} alt="Trophy" />
            </div>

            <h3 className="grid-title"> SAC Objective - {obj.id}</h3>
            <p className="grid-text">
              Lorem ipsum dolor sit amet consectetur. Mauris morbi accumsan mi non quis diam nunc.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
