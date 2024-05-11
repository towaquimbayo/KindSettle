import { NavLink } from "react-router-dom";
import "../css/footer.css";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <img className="footerLogo" src="/Logo.svg" alt="KindSettle Logo" />
          <div className="newsletterForm">
            <span>
              Subscribe to our newsletter to get the latest updates and offers.
            </span>
            <form>
              <input type="email" placeholder="Email Address" />
              <Button
                type="submit"
                title="Sign Up for Newsletter"
                text="Sign Up"
                full
              />
            </form>
          </div>
        </div>
        <div className="footerColumn">
          <h3>Company</h3>
          <NavLink className="footerLink" to="/#about">
            About Us
          </NavLink>
          <NavLink className="footerLink" to="/#how-it-works">
            How It Works
          </NavLink>
          <NavLink className="footerLink" to="/alimony-claim">
            Make a Claim
          </NavLink>
          <NavLink className="footerLink" to="/contact-us">
            Contact Us
          </NavLink>
        </div>
        <div className="footerColumn">
          <h3>Legal</h3>
          <NavLink className="footerLink" to="/privacy-policy">
            Privacy Policy
          </NavLink>
          <NavLink className="footerLink" to="/terms-and-conditions">
            Terms & Conditions
          </NavLink>
          <NavLink className="footerLink" to="/">
            Cookie Policy
          </NavLink>
          <NavLink className="footerLink" to="/disclaimer">
            Disclaimer
          </NavLink>
        </div>
        <div className="footerColumn">
          <h3>Connect</h3>
          <a
            className="footerLink"
            href="https://www.linkedin.com/company/kindsettle/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footerLink"
            href="https://www.facebook.com/kindsettle/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="footerLink"
            href="https://www.twitter.com/kindsettle/"
            target="_blank"
            rel="noreferrer"
          >
            X / Twitter
          </a>
          <a
            className="footerLink"
            href="https://www.instagram.com/kindsettle/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <span>2024 KindSettle &copy; All Rights Reserved.</span>
      </div>
    </footer>
  );
}
