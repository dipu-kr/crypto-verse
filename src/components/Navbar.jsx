import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Button, Typography, Menu, Avatar } from "antd";
// import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full bg-[#1c1c1c]">
      <nav className="nav-main">
        <div className="logo-div">
          <h2 className="logo text-yellow-500">CRYPTO</h2>
        </div>
        <div className="menu-div" onClick={menuControl}>
          {menu ? (
            <CloseOutlined className="close-icon" />
          ) : (
            <MenuFoldOutlined className="open-icon" />
          )}
        </div>
        <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
          <Link href="#about">
            <li onClick={menuControl} className="nav_bg_1">
              Home
            </li>
          </Link>
          <Link href="#skills">
            <li onClick={menuControl} className="nav_bg_2">
              Exchange
            </li>
          </Link>
          <Link href="#projects">
            <li onClick={menuControl} className="nav_bg_3">
              News
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
