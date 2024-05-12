import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field } from "../components/Field";
import Layout from "../components/Layout";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";
import "../css/claimform.css";

export default function AlimonyClaim() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalStep = 5;
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
    numChildren: 1,
    childrenInfo: [
      {
        firstName: "",
        lastName: "",
        dob: "",
      },
    ],
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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
    setTimeout(() => setLoading(false), 1000);
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
        break;
      default:
        return;
    }
    setCurrentStep((prev) => prev + 1);
    setErrorMsg("");
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
        )
      case 4:
        return (
          <form className="claimFormContainer" onSubmit={handleNext}>
            {form.childrenInfo.map((child, index) => (
              <>
                <h1>Child {index + 1} Information</h1>
                <div className="formRow">
                  <Field
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={child.firstName}
                    onChange={(e) => handleOnChange(e, "childrenInfo", index)}
                    error={formErrors?.childrenInfo?.firstName}
                  />
                  <Field
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={child.lastName}
                    onChange={(e) => handleOnChange(e, "childrenInfo", index)}
                    error={formErrors?.childrenInfo?.lastName}
                  />
                </div>
                <div className="formRow">
                  <Field
                    label="Date of Birth"
                    name="dob"
                    placeholder="MM/DD/YYYY"
                    value={child.dob}
                    onChange={(e) => handleOnChange(e, "childrenInfo", index)}
                    error={formErrors?.childrenInfo?.dob}
                    halfWidth
                  />
                </div>
              </>
            ))}
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
    </Layout>
  );
}
