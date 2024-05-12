import React from "react";
import "./ClaimSection.css";
import left from "../../img/KindsettleVectorLeft.png";
import right from "../../img/KindsettleVectorRight.png";

const ClaimSection = () => {
  return (
    <div>
      <div className="heading-paragraph-section">
        <div className="corner-left">
          <img src={left} alt="left logo" />
        </div>

        <h2>Resolve Support Matters Smoothly</h2>
        <p>
          Start your journey toward balanced agreements today. Join our platform
          and bring clarity, fairness, and ease to child support mediation.
        </p>
      </div>
      <div className="corner-right">
        <img src={right} alt="right logo" />
      </div>

      <button className="button-section">Start a claim</button>
    </div>
  );
};

export default ClaimSection;
