import React from "react";
import "./Cards.css";
import payment from "../../img/payment.png";
import profile from "../../img/profile.png";
import calculate from "../../img/calculate.png";

const Cards = () => {
  return (
    <div className="homeCardsContainer">
      <h1 className="header">How It Works</h1>

      <div className="flex-container cards-paragraph">
        <div className="flex-item">
          <div className="homeCard">
            {/* place holder for now  */}
            <img src={calculate} alt="Calculate" />
            <h3>Estimate Support Needs</h3>
            <p>
              Quickly input details to receive a fair, balanced estimate for
              your child's support.
            </p>
          </div>
          <div className="homeCard">
            {/* place holder for now  */}
            <img src={profile} alt="Profile" />
            <h3>Reach a Fair Agreement</h3>
            <p>
              Easily review and sign online to create a smooth, respectful
              agreement.
            </p>
          </div>
          <div className="homeCard">
            {/* place holder for now  */}
            <img src={payment} alt="Payment" />
            <h3>Track and Receive Funds</h3>
            <p>
              Track and manage transactions with ease for on-time, stress-free
              payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
