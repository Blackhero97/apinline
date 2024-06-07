import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Portfolio from "./pages/portfolio/Portfolio";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <main className="main">
        <BrowserRouter>
          <Navbar />
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
            <ScrollToTop />
          </header>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
