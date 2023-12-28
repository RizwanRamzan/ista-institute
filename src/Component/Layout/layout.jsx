import React from "react";
import TopBar from "./TopBar";
import "./Layout.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar button="Join" activeClass="activehome" />
      <div className="layout">
        <div className="sub-layout">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
