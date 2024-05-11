import React from "react";
import { Helmet } from "react-helmet";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Layout({ title, isLandingPage = false, children }) {
  if (title && typeof document !== "undefined") {
    document.title = isLandingPage ? "KindSettle" : `${title} | KindSettle`;
  }

  const isAuthPage = !(title === "Login" || title === "Register");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{isLandingPage ? "KindSettle" : `${title} | KindSettle`}</title>
      </Helmet>
      {isAuthPage ? <div id="wrapper">{children}</div> : children}
    </>
  );
}
