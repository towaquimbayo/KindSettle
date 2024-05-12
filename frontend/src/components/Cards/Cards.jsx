import React from "react";
import "./Cards.css";
import payment from "../../img/payment.png";
import profile from "../../img/profile.png";
import calculate from "../../img/calculate.png";

const Cards = () => {
  return (
    <div>
      <h1 className="header">How it works</h1>

      <div className="flex-container">
        <div className="flex-item">
          <div className="column">
            {/* place holder for now  */}
            <a href="https:">
              <img src={calculate} alt="Calculate" />
            </a>
            <h3>Estimate Support Needs</h3>
            <p>
              Quickly input details to receive a fair,
              <br />
              balanced estimate for your child's support.
            </p>
          </div>
          <div className="column">
            {/* place holder for now  */}
            <a href="https:">
              <img src={profile} alt="Profile" />
            </a>
            <h3>Reach a Fair Agreement</h3>
            <p>
              Easily review and sign online to create a smooth,
              <br />
              respectful agreement.
            </p>
          </div>
          <div className="column">
            {/* place holder for now  */}
            <a href="https:">
              <img src={payment} alt="Payment" />
            </a>
            <h3>Track and Receive Funds</h3>
            <p>
              Track and manage transactions with <br />
              ease for on-time, stress-free payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
