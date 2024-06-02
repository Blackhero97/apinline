import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <header className="header">
        <img src="imgs/logo.svg" alt="" className="logo" />{" "}
        <nav>
          <ul>
            <Link to={"/"} className={""}>
              Home
            </Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/service"}>Services</Link>
            <Link to={"/projects"}>Portfolio</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/contact"}>Contact Us</Link>{" "}
            <a href="tel:+5138375128">
              <button type="thrid" className="primary-btn">
                +1 513 837-5128
              </button>
            </a>{" "}
            <button className="mode-btn primary-btn">
              <i class="bx bxs-moon"></i>
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
