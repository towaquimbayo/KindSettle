import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions/UserAction";
import Layout from "../components/Layout";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";
import messages from "../messages/lang/en/user.json";
import "../css/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");

    if (!email || !password) {
      setErrMsg(messages.emptyFieldError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080" + "/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(
          setUser(true)
        );
        setLoading(false);
        navigate("/");
      } else {
        const data = await response.json();
        console.error("Login failed:", data);
        setErrMsg(data.message || messages.serverError);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrMsg(messages.serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
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
          <h1>Welcome Back!</h1>
          {errMsg && <AlertMessage msg={errMsg} type="error" />}
          <form onSubmit={handleLogin}>
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
              title="Login"
              loading={loading}
              text="Login"
              full
              customStyle={{ marginTop: "2rem" }}
            />
            <p>
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
