import React from "react";
import "./ArticleSections.css";
import articleOne from "../../img/articleSectionImageOne.png";
import articleTwo from "../../img/articleSectionImageTwo.png";
import articleThree from "../../img/articleSectionImageThree.png";
const ArticleSections = () => {
  return (
    <div className="article">
      <div className="flex-container">
        <div className="left-column">
          <img src={articleOne} alt="Man sitting and checking with phone" />
        </div>
        <div className="middle-column"></div>
        <div className="right-column">
          <h2 className="content">Streamlined Calculations</h2>
          <p className="content">
            Easily estimate fair child support payments with our intuitive
            calculator. Input your financial information, and our tool swiftly
            analyzes your unique situation to provide precise calculations,
            helping you and your co-parent reach a mutually beneficial
            agreement.
          </p>
        </div>
      </div>

      <div className="flex-container">
        <div className="left-column">
          <h2>Effortless Agreement Signing</h2>
          <p>
            Seal the deal quickly and securely with our digital agreement
            signing feature. Avoid the hassle of paperwork and formalities by
            digitally reviewing and signing agreements within the platform,
            empowering both parties to finalize arrangements with confidence and
            speed.
          </p>
        </div>
        <div className="middle-column"></div>
        <div className="right-column">
          <img src={articleTwo} alt="Hand shake" />
        </div>
      </div>
      <div className="flex-container">
        <div className="left-column">
          <img src={articleThree} alt="Mom and daughter" />
        </div>
        <div className="middle-column"></div>
        <div className="right-column">
          <h2>Simplified Payments and Payouts</h2>
          <p>
            Manage your financial transactions with ease using our automated
            payment system. Track, schedule, and manage payments while ensuring
            timely payouts to recipients. Stay organized and in control of your
            finances with our transparent and user-friendly interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSections;
