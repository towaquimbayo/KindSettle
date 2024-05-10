import React from "react";
import { Helmet } from "react-helmet";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Layout({ title, isLandingPage = false, children }) {
  if (title && typeof document !== "undefined") {
    document.title = isLandingPage ? "KindSettle" : `${title} | KindSettle`;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{isLandingPage ? "KindSettle" : `${title} | KindSettle`}</title>
      </Helmet>
      <div id="wrapper">{children}</div>
    </>
  );
}