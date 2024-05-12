import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="container">
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <h2>Resources 1</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quibusdam cum hic adipisci ut similique, quos libero eius magnam
            beatae cumque? Architecto, eligendi! Fuga harum, vitae debitis ad
            corrupti sint?.
          </p>
        </div>

        <div className="card">
          <h2>Resources 2</h2>
          <p>This is the content of Card 2.</p>
        </div>
      </div>
      <div className="view-more">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Resources;
