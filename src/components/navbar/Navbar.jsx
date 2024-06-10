import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar({ theme, setTheme }) {
  // const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  // const change = () => {
  //   setIsDark(!isDark);
  //   console.log(isDark);
  // };
  // useEffect(() => {
  //   if (isDark) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDark]);
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div className="header-box">
        <header className="header">
          <div className="logo">
            {theme == "light" ? (
              <Link to={"/"}>
                <img src="imgs/logo.svg" alt="" className="logo" />
              </Link>
            ) : (
              <Link to={"/"}>
                <img src="imgs/logodark.svg" alt="" className="logo" />
              </Link>
            )}
          </div>
          <nav className={open ? "open-nav" : ""}>
            <ul onClick={() => setOpen(!open)}>
              <li>
                <NavLink to={"/"} className={""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>{" "}
              </li>
              <li>
                <a href="tel:+5138375128">
                  <button type="thrid" className="primary-btn">
                    +1 513 837-5128
                  </button>
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggle_mode();
                  }}
                  className="mode-btn primary-btn"
                >
                  {theme == "light" ? (
                    <i class="bx bxs-moon"></i>
                  ) : (
                    <i class="bx bxs-sun"></i>
                  )}
                </button>
              </li>
              <li>
                <div onClick={() => setOpen(!open)} className="close">
                  <i class="bx bx-x-circle"></i>
                </div>
              </li>
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
