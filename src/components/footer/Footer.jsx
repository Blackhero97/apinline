import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Testimonials from "../testimonials/Testimonials";
import AskedQuest from "../askedQuest/AskedQuest";
function Footer() {
  return (
    <>
      <Testimonials />
      <AskedQuest />
      <footer>
        <div className="asked-box-top page-padding">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Take the first step towards digital success with Apinline by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business. Whether you need a stunning website,
            a powerful mobile app, or a data-driven marketing campaign, we've
            got you covered. Let's embark on this transformative journey
            together.
          </p>
          <div className="footer-btn-box">
            <button className="primary-btn">Chat to Us</button>
            <button className="light-btn">Get Started</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-box">
            <h4>Home</h4>
            <ul>
              <Link>Our services</Link>
              <Link>Our Testimonials</Link>
              <Link>FAQ</Link>
              <Link>Partners</Link>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Services</h4>
            <ul>
              <Link>Web Design</Link>
              <Link>Website Development</Link>
              <Link>App Development</Link>
              <Link>Digital Marketing</Link>
            </ul>
          </div>
          <div className="footer-box">
            <h4>About Us</h4>
            <ul>
              <Link>Our Team</Link>
              <Link>Achievements</Link>
              <Link>Awards</Link>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Blogs</h4>
            <ul>
              <Link>Our Blogs</Link>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Contact us</h4>
            <ul>
              <Link>Email: apinline@gmail.com</Link>
              <Link>Phone: +1 513 837-5128</Link>
              <Link>Location: Namangan , Chust 35</Link>
            </ul>
          </div>
        </div>
        <div className="footer-social-wrapper">
          <img src="./imgs/logo.svg" alt="" />
          <div className="footer-social-box">
            <h4>Follow Us On Social Media</h4>
            <ul>
              <Link>
                <i class="bx bxl-facebook"></i>
              </Link>
              <Link>
                <i class="bx bxl-twitter"></i>
              </Link>
              <Link>
                <i class="bx bxl-instagram"></i>
              </Link>
              <Link>
                <i class="bx bxl-linkedin"></i>
              </Link>
            </ul>
          </div>
        </div>{" "}
        <div className="footer-privacy-wrapper">
          <Link>@2024 Apinline. All Rights Reserved.</Link>

          <div className="footer-privacy-box">
            <ul>
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
              <Link>Cookie Policy</Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
