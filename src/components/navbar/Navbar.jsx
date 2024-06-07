import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const change = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <>
      <div className="header-box">
        <header className="header">
          {isDark ? (
            <img src="imgs/logodark.svg" alt="" className="logo" />
          ) : (
            <img src="imgs/logo.svg" alt="" className="logo" />
          )}
          <nav className={open ? "open-nav" : ""}>
            <ul onClick={() => setOpen(!open)}>
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
              <div onClick={() => setOpen(!open)} className="close">
                <i class="bx bx-x-circle"></i>
              </div>
            </ul>
          </nav>
          <div onClick={() => setOpen(!open)} className="menu">
            <i class="bx bx-menu-alt-left"></i>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
