import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "../redux/actions/UserAction";
import "../css/navbar.css";
import Button from "./Button";

export default function Navbar({ transparent = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <nav className={`navbar ${transparent ? "transparent" : ""}`}>
      <div className="navContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="logo">
            <img src="./Logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="navLinksContainer">
          <NavLink className="navLink" to="/#how-it-works">
            How It Works
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/my-claims" className="navLink">
                My Claims
              </NavLink>
              <NavLink to="/transaction-history" className="navLink">
                Transaction History
              </NavLink>
              <NavLink className="navLink" to="/profile">
                Profile
              </NavLink>
              <Link
                className="navLink"
                onClick={() => dispatch(clearSession())}
              >
                Logout
              </Link>
            </>
          )}
          <Button
            text="Get Started"
            title="Get Started"
            onClick={() =>
              navigate(isLoggedIn ? "/alimony-claim" : "/register")
            }
          />
        </div>
      </div>
    </nav>
  );
}
