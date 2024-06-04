import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar({ change, isDark }) {
  return (
    <>
      <div className="header-box">
        <header className="header">
          <img src="imgs/logo.svg" alt="" className="logo" />{" "}
          <nav>
            <ul>
              <NavLink to={"/"} className={""}>
                Home
              </NavLink>
              <NavLink to={"/about"}>About Us</NavLink>
              <NavLink to={"/service"}>Services</NavLink>
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
              <NavLink to={"/blogs"}>Blogs</NavLink>
              <NavLink to={"/contact"}>Contact Us</NavLink>{" "}
              <a href="tel:+5138375128">
                <button type="thrid" className="primary-btn">
                  +1 513 837-5128
                </button>
              </a>{" "}
              <button onClick={change} className="mode-btn primary-btn">
                {isDark ? (
                  <i class="bx bxs-sun"></i>
                ) : (
                  <i class="bx bxs-moon"></i>
                )}
              </button>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
