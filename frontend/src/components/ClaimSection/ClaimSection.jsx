import React from "react";
import "./ClaimSection.css";
import left from "../../img/KindsettleVectorLeft.png";
import right from "../../img/KindsettleVectorRight.png";
import Button from "../Button.js";

const ClaimSection = () => {
  return (
    <div classame="container">
      <div className="heading-paragraph-section">
        <div className="corner-top-right">
          <img src={right} alt="left logo" />
        </div>
        <div className="content">
          <h2>Resolve Support Matters Smoothly</h2>
          <p>
            Start your journey toward balanced agreements today. Join our
            platform and bring clarity, fairness, and ease to child support
            mediation.
          </p>

          <Button
            text="Start a claim"
            title="Start a claim"
            customStyle={{ display: "block", margin: "0 auto" }}
            type="submit"
          />
        </div>
        <div className="corner-bottom-left">
          <img src={left} alt="right logo" />
        </div>
      </div>
    </div>
  );
};

export default ClaimSection;
