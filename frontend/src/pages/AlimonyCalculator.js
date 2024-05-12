import { useState } from "react";
import Layout from "../components/Layout";
import { Field } from "../components/Field";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function AlimonyCalculator() {
  const [formData, setFormData] = useState({
    monthlyPay: "",
    otherMonthlyPay: "",
    pctTime: "",
    children: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    let { monthlyPay, otherMonthlyPay, pctTime, children } = formData;

    // Validation
    const errors = {};
    if (!monthlyPay) errors.monthlyPay = "Monthly Pay is required";
    if (!otherMonthlyPay) errors.otherMonthlyPay = "Other Parent's Monthly Pay is required";
    if (!pctTime) errors.pctTime = "Percentage of Time with Children is required";
    if (!children) errors.children = "Number of Children is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Convert to numbers
    monthlyPay = parseFloat(monthlyPay);
    otherMonthlyPay = parseFloat(otherMonthlyPay);
    pctTime = parseFloat(pctTime);
    children = parseInt(children);

    // CS = K(HN - H% * TN) * NCM

    // Monthly disposable income of the higher earning parent
    var HN = Math.max(monthlyPay, otherMonthlyPay);

    // % of time high earning parent has custody
    var hPct = pctTime / 100;
    if (monthlyPay < otherMonthlyPay)
      hPct = 1 - hPct;

    // monthly disposable income for both parents combined
    var TN = monthlyPay + otherMonthlyPay;

    var NCM = 1; // Number of children multiplier; data comes from a table
    if (children === 2) NCM = 1.6;
    else if (children === 3) NCM = 2;
    else if (children === 4) NCM = 2.3;
    else if (children === 5) NCM = 2.5;
    else if (children === 6) NCM = 2.625;
    else NCM = 2.75;

    // K factor = high earner time multiplier
    var K;
    if (monthlyPay >= otherMonthlyPay) { // You're the high earner
      if (pctTime > 50) {
        K = 2 - hPct;
      } else {
        K = 1 + hPct;
      }
    } else { // Other parent is the high earner
      if (pctTime > 50) {
        K = -1 - hPct;
      } else {
        K = -2 + hPct;
      }
    }
    // K factor multiplier, it changes the K factor; data comes from a table
    if (TN <= 800) {
      K = K * (0.20 + TN / 16000);
    } else if (TN <= 6666) {
      K = K * (0.25);
    } else if (TN <= 9999) {
      K = K * (0.10 + 1000 / TN);
    } else {
      K = K * (0.12 + 800 / TN);
    }

    var support = K * (HN - hPct * TN) * NCM;
    setResult(support.toFixed(2));
    setErrors({});
  }

  return (
    <Layout title="Alimony Calculator">
      <div className="pageHeaderContainer">
        <div className="pageHeader">
          <h1>Alimony Calculator</h1>
          <p>Estimate your potential alimony payments with ease and accuracy using our simple calculator. This calculator uses
            the <Link to="https://divorce.com/blog/how-is-child-support-calculated/" target="_blank">Income Shares model</Link>.</p>
        </div>
      </div>
      <div className="alimonyCalculatorContainer">
        <div className="alimonyCalculator">
          <div className="formRow">
            <Field
              label="Your Monthly Pay"
              name="monthlyPay"
              placeholder="Enter your monthly pay"
              value={formData.monthlyPay}
              onChange={handleChange}
              error={errors.monthlyPay}
            />
            <Field
              label="Other Parent's Monthly Pay"
              name="otherMonthlyPay"
              placeholder="Enter other parent's monthly pay"
              value={formData.otherMonthlyPay}
              onChange={handleChange}
              error={errors.otherMonthlyPay}
            />
          </div>
          <div className="formRow">
            <Field
              label="Number of Children"
              name="children"
              placeholder="Enter number of children"
              value={formData.children}
              onChange={handleChange}
              error={errors.children}
            />
            <Field
              label="Percentage of Time with Children"
              name="pctTime"
              placeholder="Enter percentage of time with children"
              value={formData.pctTime}
              onChange={handleChange}
              error={errors.pctTime}
            />
          </div>
          <Button
            title="Calculate"
            text="Calculate"
            onClick={handleCalculate}
            customStyle={{ marginBottom: "2rem" }}
          />
          {result !== null && (
            <div className="result">
              {result >= 0 ? (
                <>
                  <p>Your estimated alimony payment is:</p>
                  <h2>${result}</h2>
                </>
              ) : (
                <>
                  <p>Your estimated alimony compensation is:</p>
                  <h2>${Math.abs(result)}</h2>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
