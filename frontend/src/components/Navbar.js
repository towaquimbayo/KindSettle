import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "../redux/actions/UserAction";
import "../css/navbar.css";
import Button from "./Button";

export default function Navbar({ transparent = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isTransparent, setIsTransparent] = useState(transparent);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsTransparent(currentScrollPos < 100);
    };

    if (transparent) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [transparent]);

  return (
    <nav className={`navbar ${isTransparent ? "transparent" : ""}`}>
      <div className="navContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="logo">
            <img src="./Logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="navLinksContainer">
          <NavLink className="navLink" to="/alimony-calculator">
            Calculator
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/my-claims" className="navLink">
                My Claims
              </NavLink>
              <NavLink to="/transaction-history" className="navLink">
                Transaction History
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
