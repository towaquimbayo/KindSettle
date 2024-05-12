import React from "react";
import "./HeroSection.css";
import Button from "../Button.js";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Child Support, Made Easy</h1>

        <p>
          Your platform for child support mediation. Find fair,
          <br />
          straightforward agreements that benefit everyone.
        </p>

        <Button text="Start a claim" title="Start a claim" />
      </div>
    </div>
  );
}
