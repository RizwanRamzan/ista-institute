import React, { useEffect, useState } from "react";
import { Ista_Logo, Logo, SearchIcon } from "../../assets";
import { Input, Select } from "antd";
import "../../GeneralStyle/index.scss";
import "./TopBar.scss";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";

const TopBar = ({ activeClass }) => {
  const [activeTabs, setActiveTabs] = useState("");

  const navigate = useNavigate();
  const windowLocation = window.location.pathname;

  const tabs = (tab, path) => {
    setActiveTabs(tab);
    navigate(path);
  };

  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="All">
      <Option value="one">one</Option>
      <Option value="two">two</Option>
    </Select>
  );

  return (
    <div className="headerMain">
      <div className="header">
        <div className="left-side">
          <img onClick={()=>navigate('/home')} src={Ista_Logo} />
          {/* <Input
            className="ant-input-affix-wrapper"
            placeholder="Search isttaa..."
            suffix={<img src={SearchIcon} />}
          /> */}
          {/* <Input
            addonBefore={selectBefore}
            defaultValue="Search isttaa..."
            className="ant-input-affix-wrapper"
            suffix={<img src={SearchIcon} />}
          /> */}
        </div>
        <div className="right-side">
          <div className="tabs">
            <p
              className={windowLocation.includes("home") && activeClass}
              onClick={() => tabs("home", "/home")}
            >
              Home
            </p>
            <p
              className={windowLocation.includes("about") && activeClass}
              onClick={() => tabs("about", "/about")}
            >
              About
            </p>
            <p
              className={windowLocation.includes("contact") && activeClass}
              onClick={() => tabs("contact", "/contact")}
            >
              Contact
            </p>
          </div>
          <button
            onClick={() => navigate("/apply-now")}
            className="loginButton"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
