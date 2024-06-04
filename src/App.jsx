import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Projects from "./pages/projects/Projects";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Portfolio from "./pages/portfolio/Portfolio";
function App() {
  const [isDark, setIsDark] = useState(false);
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
      <main className="main">
        <BrowserRouter>
          <Navbar change={change} isDark={isDark} />
          <header className="main-box container ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Category />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </header>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
