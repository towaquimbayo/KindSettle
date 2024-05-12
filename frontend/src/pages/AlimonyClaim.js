import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field } from "../components/Field";
import Layout from "../components/Layout";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";
import "../css/claimform.css";
import { BiEdit } from "react-icons/bi";
import ClaimSuccessForm from "../components/ClaimSuccesForm";

export default function AlimonyClaim() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalStep = 7;
  let [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    claimState: "",
    userInfo: {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      email: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    coparentInfo: {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      email: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    numChildren: "1",
    childrenInfo: [],
    custodyPercentage: "",
    monthlyNetIncome: "",
    monthlyDeductions: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [claimSuccess, setClaimSuccess] = useState(false);

  function handleOnChange(e, key = "", childrenIndex = null) {
    if (key) {
      if (childrenIndex !== null) {
        setFormErrors((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            [childrenIndex]: {
              ...prev[key][childrenIndex],
              [e.target.name]: "",
            },
          },
        }));
        setForm((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            [childrenIndex]: {
              ...prev[key][childrenIndex],
              [e.target.name]: e.target.value,
            },
          },
        }));
        return;
      }
      setFormErrors((prev) => ({
        ...prev,
        [key]: { ...prev[key], [e.target.name]: "" },
      }));
      setForm((prev) => ({
        ...prev,
        [key]: { ...prev[key], [e.target.name]: e.target.value },
      }));
      return;
    }
    setFormErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // TODO: Validate form data
    // TODO: Show loading spinner
    // TODO: Send form data to the server
    // fetch("/api/claim", { method: "POST", body: JSON.stringify(form) });

    console.log("Sending Form to Server!", form);
    setTimeout(() => {
      setLoading(false);
      setClaimSuccess(true);
    }, 1000);
  }

  function handleNext(e) {
    e.preventDefault();
    switch (currentStep) {
      case 0:
        if (!form.claimState) {
          setErrorMsg("Please enter the state of your child support case.");
          return;
        }
        break;
      case 1:
        if (
          !form.userInfo.firstName ||
          !form.userInfo.lastName ||
          !form.userInfo.dob ||
          !form.userInfo.phone ||
          !form.userInfo.email
        ) {
          setErrorMsg("Please fill out all mandatory fields.");
          return;
        }
        break;
      case 2:
        if (
          !form.coparentInfo.firstName ||
          !form.coparentInfo.lastName ||
          !form.coparentInfo.dob ||
          !form.coparentInfo.phone ||
          !form.coparentInfo.email
        ) {
          setErrorMsg("Please fill out all mandatory fields.");
          return;
        }
        break;
      case 3:
        if (!form.numChildren) {
          setErrorMsg("Please enter the number of children to claim.");
          return;
        }
        const childrenInfo = Array.from(
          { length: parseInt(form.numChildren) },
          () => ({
            firstName: "",
            lastName: "",
            dob: "",
          })
        );
        setForm((prev) => ({ ...prev, childrenInfo }));
        setFormErrors((prev) => ({ ...prev, childrenInfo }));
        break;
      case 4:
        for (let i = 0; i < parseInt(form.numChildren); i++) {
          if (
            !form.childrenInfo[i].firstName ||
            !form.childrenInfo[i].lastName ||
            !form.childrenInfo[i].dob
          ) {
            setErrorMsg("Please fill out all mandatory fields.");
            return;
          }
        }
        break;
      case 5:
        if (!form.custodyPercentage) {
          setErrorMsg("Please enter the custody percentage.");
          return;
        }
        break;
      case 6:
        if (!form.monthlyNetIncome || !form.monthlyDeductions) {
          setErrorMsg("Please fill out all mandatory fields.");
          return;
        }
        break;
      default:
        return;
    }
    setCurrentStep((prev) => prev + 1);
    setErrorMsg("");
    window.scrollTo(0, 0);
    console.log("Form Data:", form);
  }

  function childrenInfoForm() {
    let childrenForm = [];
    for (let i = 0; i < parseInt(form.numChildren); i++) {
      childrenForm.push(
        <div key={i}>
          {i === 0 ? (
            <h1>Child {i + 1} Information</h1>
          ) : (
            <h1 style={{ marginTop: "1rem" }}>Child {i + 1} Information</h1>
          )}
          <div className="formRow">
            <Field
              label="First Name"
              name="firstName"
              placeholder="John"
              value={form.childrenInfo[i].firstName}
              onChange={(e) => handleOnChange(e, "childrenInfo", i)}
              error={formErrors?.childrenInfo?.[i]?.firstName}
            />
            <Field
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              value={form.childrenInfo[i].lastName}
              onChange={(e) => handleOnChange(e, "childrenInfo", i)}
              error={formErrors?.childrenInfo?.[i]?.lastName}
            />
          </div>
          <div className="formRow">
            <Field
              label="Date of Birth"
              name="dob"
              placeholder="MM/DD/YYYY"
              value={form.childrenInfo[i].dob}
              onChange={(e) => handleOnChange(e, "childrenInfo", i)}
              error={formErrors?.childrenInfo?.[i]?.dob}
              halfWidth
            />
          </div>
        </div>
      );
    }
    return childrenForm;
  }

  function ClaimForm() {
    switch (currentStep) {
      case 1:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>Personal Information</h1>
            <div className="formRow">
              <Field
                label="First Name"
                name="firstName"
                placeholder="John"
                value={form.userInfo.firstName}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.firstName}
              />
              <Field
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                value={form.userInfo.lastName}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.lastName}
              />
            </div>
            <div className="formRow">
              <Field
                label="Date of Birth"
                name="dob"
                placeholder="MM/DD/YYYY"
                value={form.userInfo.dob}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.dob}
              />
              <Field
                label="Phone"
                name="phone"
                placeholder="+1 (XXX) XXX - XXXX"
                value={form.userInfo.phone}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.phone}
              />
            </div>
            <div className="formRow">
              <Field
                label="Email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={form.userInfo.email}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.email}
                halfWidth
              />
            </div>
            <h1 style={{ marginTop: "1rem" }}>Contact Information</h1>
            <div className="formRow">
              <Field
                label="Street Address"
                name="street"
                placeholder="1234 Main St"
                value={form.userInfo.street}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.street}
              />
              <Field
                label="City"
                name="city"
                placeholder="Los Angeles"
                value={form.userInfo.city}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.city}
              />
            </div>
            <div className="formRow">
              <Field
                label="State"
                name="state"
                placeholder="CA"
                value={form.userInfo.state}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.state}
              />
              <Field
                label="Postal Code"
                name="postalCode"
                placeholder=""
                value={form.userInfo.postalCode}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.postalCode}
              />
            </div>
            <div className="formRow">
              <Field
                label="Country"
                name="country"
                placeholder="United States"
                value={form.userInfo.country}
                onChange={(e) => handleOnChange(e, "userInfo")}
                error={formErrors?.userInfo?.country}
                halfWidth
              />
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 2:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>Co-Parent Personal Information</h1>
            <div className="formRow">
              <Field
                label="First Name"
                name="firstName"
                placeholder="John"
                value={form.coparentInfo.firstName}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.firstName}
              />
              <Field
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                value={form.coparentInfo.lastName}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.lastName}
              />
            </div>
            <div className="formRow">
              <Field
                label="Date of Birth"
                name="dob"
                placeholder="MM/DD/YYYY"
                value={form.coparentInfo.dob}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.dob}
              />
              <Field
                label="Phone"
                name="phone"
                placeholder="+1 (XXX) XXX - XXXX"
                value={form.coparentInfo.phone}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.phone}
              />
            </div>
            <div className="formRow">
              <Field
                label="Email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={form.coparentInfo.email}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.email}
                halfWidth
              />
            </div>
            <h1 style={{ marginTop: "1rem" }}>Co-Parent Contact Information</h1>
            <div className="formRow">
              <Field
                label="Street Address"
                name="street"
                placeholder="1234 Main St"
                value={form.coparentInfo.street}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.street}
              />
              <Field
                label="City"
                name="city"
                placeholder="Los Angeles"
                value={form.coparentInfo.city}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.city}
              />
            </div>
            <div className="formRow">
              <Field
                label="State"
                name="state"
                placeholder="CA"
                value={form.coparentInfo.state}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.state}
              />
              <Field
                label="Postal Code"
                name="postalCode"
                placeholder=""
                value={form.coparentInfo.postalCode}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.postalCode}
              />
            </div>
            <div className="formRow">
              <Field
                label="Country"
                name="country"
                placeholder="United States"
                value={form.coparentInfo.country}
                onChange={(e) => handleOnChange(e, "coparentInfo")}
                error={formErrors?.coparentInfo?.country}
                halfWidth
              />
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 3:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>Number of Children to Claim</h1>
            <div className="formRow">
              <Field
                label="Number of Children"
                name="numChildren"
                placeholder="1"
                value={form.numChildren}
                onChange={handleOnChange}
                error={formErrors?.numChildren}
                halfWidth
              />
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 4:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            {childrenInfoForm()}
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 5:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>Physical Custody Time Spent</h1>
            <p className="description">
              Provide the approximate percentage of time your children are under
              your direct care and supervision. This helps us accurately assess
              custody arrangements.
            </p>
            <div className="formRow">
              <Field
                label="Custody Percentage"
                name="custodyPercentage"
                placeholder="50%"
                value={form.custodyPercentage}
                onChange={handleOnChange}
                error={formErrors?.custodyPercentage}
                halfWidth
              />
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 6:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>Monthly Net Income</h1>
            <div className="formRow">
              <Field
                label="Monthly Net Income"
                name="monthlyNetIncome"
                placeholder="$1000"
                value={form.monthlyNetIncome}
                onChange={handleOnChange}
                error={formErrors?.monthlyNetIncome}
                halfWidth
              />
            </div>
            <h1 style={{ marginTop: "1rem" }}>Total Monthly Deductions</h1>
            <div className="formRow">
              <Field
                label="Monthly Deductions"
                name="monthlyDeductions"
                placeholder="$1000"
                value={form.monthlyDeductions}
                onChange={handleOnChange}
                error={formErrors?.monthlyDeductions}
                halfWidth
              />
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Review Claim"
                text="Review"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 7:
        return (
          <form className="claimFormContainer" onSubmit={handleSubmit}>
            <h1>Review My Claim</h1>
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>What state is your child support case located?</h2>
                <button className="link" onClick={() => setCurrentStep(0)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>Claim State</span>
                <span className="value">{form.claimState}</span>
              </div>
            </div>
            <hr />
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>Personal Information</h2>
                <button className="link" onClick={() => setCurrentStep(1)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>First Name</span>
                <span className="value">{form.userInfo.firstName}</span>
              </div>
              <div className="formReviewData">
                <span>Last Name</span>
                <span className="value">{form.userInfo.lastName}</span>
              </div>
              <div className="formReviewData">
                <span>Date of Birth</span>
                <span className="value">{form.userInfo.dob}</span>
              </div>
              <div className="formReviewData">
                <span>Phone</span>
                <span className="value">{form.userInfo.phone}</span>
              </div>
              <div className="formReviewData">
                <span>Email</span>
                <span className="value">{form.userInfo.email}</span>
              </div>
              <div className="formReviewData">
                <span>Street Address</span>
                <span className="value">{form.userInfo.street}</span>
              </div>
              <div className="formReviewData">
                <span>City</span>
                <span className="value">{form.userInfo.city}</span>
              </div>
              <div className="formReviewData">
                <span>State</span>
                <span className="value">{form.userInfo.state}</span>
              </div>
              <div className="formReviewData">
                <span>Postal Code</span>
                <span className="value">{form.userInfo.postalCode}</span>
              </div>
              <div className="formReviewData">
                <span>Country</span>
                <span className="value">{form.userInfo.country}</span>
              </div>
            </div>
            <hr />
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>Co-Parent Personal Information</h2>
                <button className="link" onClick={() => setCurrentStep(2)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>First Name</span>
                <span className="value">{form.coparentInfo.firstName}</span>
              </div>
              <div className="formReviewData">
                <span>Last Name</span>
                <span className="value">{form.coparentInfo.lastName}</span>
              </div>
              <div className="formReviewData">
                <span>Date of Birth</span>
                <span className="value">{form.coparentInfo.dob}</span>
              </div>
              <div className="formReviewData">
                <span>Phone</span>
                <span className="value">{form.coparentInfo.phone}</span>
              </div>
              <div className="formReviewData">
                <span>Email</span>
                <span className="value">{form.coparentInfo.email}</span>
              </div>
              <div className="formReviewData">
                <span>Street Address</span>
                <span className="value">{form.coparentInfo.street}</span>
              </div>
              <div className="formReviewData">
                <span>City</span>
                <span className="value">{form.coparentInfo.city}</span>
              </div>
              <div className="formReviewData">
                <span>State</span>
                <span className="value">{form.coparentInfo.state}</span>
              </div>
              <div className="formReviewData">
                <span>Postal Code</span>
                <span className="value">{form.coparentInfo.postalCode}</span>
              </div>
              <div className="formReviewData">
                <span>Country</span>
                <span className="value">{form.coparentInfo.country}</span>
              </div>
            </div>
            <hr />
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>Number of Children to Claim</h2>
                <button className="link" onClick={() => setCurrentStep(3)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>Number of Children</span>
                <span className="value">{form.numChildren}</span>
              </div>
            </div>
            <hr />
            {Object.values(form.childrenInfo).map((child, index) => (
              <div key={index} className="formReviewSection">
                <div className="formReviewHeading">
                  <h2>Child {index + 1} Information</h2>
                  <button className="link" onClick={() => setCurrentStep(4)}>
                    Change
                    <BiEdit />
                  </button>
                </div>
                <div className="formReviewData">
                  <span>Child {index + 1} First Name</span>
                  <span className="value">{child.firstName}</span>
                </div>
                <div className="formReviewData">
                  <span>Child {index + 1} Last Name</span>
                  <span className="value">{child.lastName}</span>
                </div>
                <div className="formReviewData">
                  <span>Child {index + 1} Date of Birth</span>
                  <span className="value">{child.dob}</span>
                </div>
              </div>
            ))}
            <hr />
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>Physical Custody Time Spent</h2>
                <button className="link" onClick={() => setCurrentStep(5)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>Custody Percentage</span>
                <span className="value">{form.custodyPercentage}</span>
              </div>
            </div>
            <hr />
            <div className="formReviewSection">
              <div className="formReviewHeading">
                <h2>Monthly Net Income</h2>
                <button className="link" onClick={() => setCurrentStep(6)}>
                  Change
                  <BiEdit />
                </button>
              </div>
              <div className="formReviewData">
                <span>Monthly Net Income</span>
                <span className="value">{form.monthlyNetIncome}</span>
              </div>
              <div className="formReviewData">
                <span>Monthly Deductions</span>
                <span className="value">{form.monthlyDeductions}</span>
              </div>
            </div>
            <div className="formButtons">
              <Button
                title="Back to Previous Step"
                text="Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                outline
              />
              <Button
                title="Submit Claim"
                text="Submit Claim"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
      case 0:
      default:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            <h1>What state is your child support case located?</h1>
            <div className="formRow">
              <Field
                label="State"
                name="claimState"
                placeholder="California"
                value={form.claimState}
                onChange={handleOnChange}
                halfWidth
                error={formErrors?.claimState}
              />
            </div>
            <div className="formButtons">
              <Button
                title="Cancel Claim"
                text="Cancel"
                onClick={() => navigate("/my-claims")}
                outline
              />
              <Button
                title="Next Step"
                text="Next"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        );
    }
  }

  return (
    <Layout title="Create an Alimony Claim">
      {claimSuccess ? <ClaimSuccessForm /> : (
        <div className="claimContainer">
          <div className="claimProgressbarContainer">
            <div className="claimProgressbar">
              <div
                className="claimProgressbarFill"
                style={{ width: `${(currentStep / totalStep) * 100}%` }}
              ></div>
            </div>
          </div>
          {errorMsg && <AlertMessage type="error" msg={errorMsg} />}
          {ClaimForm()}
        </div>
      )}
    </Layout>
  );
}
