import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";
import messages from "../messages/lang/en/user.json";
import "../css/auth.css";
import { config } from "../config";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");

    if (!name || !email || !password) {
      setErrMsg(messages.emptyFieldError);
      setLoading(false);
      return;
    }

    if (!validateName(name)) {
      setErrMsg(messages.nameLengthError);
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrMsg(messages.invalidEmailError);
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setErrMsg(messages.invalidPasswordError);
      setLoading(false);
      return;
    }

    try {
      const endpoint = config.url;
      const response = await fetch(`${endpoint}/api/v1/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setLoading(false);
        navigate("/login");
      } else {
        const data = await response.json();
        console.error("Signup failed:", data);
        setErrMsg(messages.serverError);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrMsg(messages.serverError);
    } finally {
      setLoading(false);
    }
  };

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
    return re.test(password);
  }

  function validateName(name) {
    return name.length >= 3;
  }

  return (
    <Layout title="Register" isAuthPage>
      <div className="auth-container">
        <div className="auth-illustration">
          <div className="auth-info">
            <Link to="/" className="logo">
              KindSettle
            </Link>
            <div className="auth-info-head">
              <h1>Building a brighter future for your children.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
            <div className="review">
              <p>
                <q>
                  <i>
                    Simply unbelievable! I am really satisfied with the quality of
                    this app. This has saved me so much time and money.
                  </i>
                </q>
              </p>
              <div className="reviewer">
                <div className="avatar">
                  <img src="https://api.dicebear.com/8.x/avataaars/svg?seed=Whiskers" alt="avatar" width={35} />
                </div>
                <div>
                  <p className="name">John Doe</p>
                  <p>Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auth-form">
          <h1>Get Started</h1>
          {errMsg && <AlertMessage msg={errMsg} type="error" />}
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                onChange={(e) => {
                  setName(e.target.value);
                  setErrMsg("");
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrMsg("");
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrMsg("");
                }}
              />
            </div>
            <Button
              type="submit"
              title="Sign Up"
              loading={loading}
              text="Sign Up"
              full
              customStyle={{ marginTop: "2rem" }}
            />
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
