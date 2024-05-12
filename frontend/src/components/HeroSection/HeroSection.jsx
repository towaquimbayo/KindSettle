import React from "react";
import "./HeroSection.css";
import Button from "../Button.js";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Child Support, Made Easy</h1>

        <p>
          Your platform for child support mediation. Find fair,
          <br />
          straightforward agreements that benefit everyone.
        </p>

        <Button
          text="Start a claim"
          title="Start a claim"
          customStyle={{ display: "block", margin: "0 0" }}
          type="submit"
        />

       
      </div>
    </div>
  );
};

export default HeroSection;
