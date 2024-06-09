import "./about.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>
      <div className="about page-padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About page</title>
          <meta
            name="keywords"
            content="Software , UI/UX , UX and UI , Web programming, JavaScript, React , CSS , HTML , Web design, Mobile application, Seo"
          />
          <link rel="canonical" href="/about" />
        </Helmet>
        <div className="about-box">
          <div className="about-box-top">
            <h2>Apinline - a reliablepartner for your digital project</h2>
            <h3>Everyone has a story. Here is ours:</h3>
          </div>
          <div className="about-box-bottom-wrapper">
            <div className="number-box">
              <div className="numbers">
                <div className="number">01</div>
                <div className="number">02</div>
                <div className="number">03</div>
                <div className="number">04</div>
              </div>
              <div className="line"></div>
            </div>
            <div className="about-box-bottom">
              <div className="about-card card-padding">
                <div className="about-card-img-box">
                  <i class="bx bxs-star"></i>
                </div>
                <div className="about-card-info">
                  <h3>The Apinline was founded in 2024</h3>
                  <p>
                    Apinline is a digital product agency that is passionate
                    about crafting exceptional digital experiences. We
                    specialize in design, engineering, and project management,
                    helping businesses thrive in the digital landscape. At
                    Apinline, we follow a structured and collaborative process
                    to ensure the successful delivery of exceptional digital
                    products. Our process combines industry best practices,
                    creative thinking, and a client-centric approach.
                  </p>
                </div>
              </div>
              <div className="about-card card-padding">
                <div className="about-card-img-box">
                  <i class="bx bxs-star"></i>
                </div>
                <div className="about-card-info">
                  <h3>The Apinline was founded in 2024</h3>
                  <p>
                    Apinline is a digital product agency that is passionate
                    about crafting exceptional digital experiences. We
                    specialize in design, engineering, and project management,
                    helping businesses thrive in the digital landscape. At
                    Apinline, we follow a structured and collaborative process
                    to ensure the successful delivery of exceptional digital
                    products. Our process combines industry best practices,
                    creative thinking, and a client-centric approach.
                  </p>
                </div>
              </div>
              <div className="about-card card-padding">
                <div className="about-card-img-box">
                  <i class="bx bxs-star"></i>
                </div>
                <div className="about-card-info">
                  <h3>The Apinline was founded in 2024</h3>
                  <p>
                    Apinline is a digital product agency that is passionate
                    about crafting exceptional digital experiences. We
                    specialize in design, engineering, and project management,
                    helping businesses thrive in the digital landscape. At
                    Apinline, we follow a structured and collaborative process
                    to ensure the successful delivery of exceptional digital
                    products. Our process combines industry best practices,
                    creative thinking, and a client-centric approach.
                  </p>
                </div>
              </div>
              <div className="about-card card-padding">
                <div className="about-card-img-box">
                  <i class="bx bxs-star"></i>
                </div>
                <div className="about-card-info">
                  <h3>The Apinline was founded in 2024</h3>
                  <p>
                    Apinline is a digital product agency that is passionate
                    about crafting exceptional digital experiences. We
                    specialize in design, engineering, and project management,
                    helping businesses thrive in the digital landscape. At
                    Apinline, we follow a structured and collaborative process
                    to ensure the successful delivery of exceptional digital
                    products. Our process combines industry best practices,
                    creative thinking, and a client-centric approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="team-box-top page-padding">
              <h2>Our Team Members</h2>
              <p>
                Partnering with Apinline offers a multitude of advantages.
                Experience increased brand visibility, improved customer
                engagement, and higher ROI. Our tailored solutions are designed
                to meet your unique business needs, ensuring lasting success.
              </p>
            </div>{" "}
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              loop={true}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                475: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },
                320: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              navigation={false}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="team-card card-padding">
                  <div className="team-card-img-box">
                    <img src="./imgs/team.png" alt="" />
                  </div>
                  <h4>Ortiqov Anvarjon</h4>
                  <h5>Project manager</h5>
                  <div className="social-box">
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card card-padding">
                  <div className="team-card-img-box">
                    <img src="./imgs/team.png" alt="" />
                  </div>
                  <h4>Ortiqov Anvarjon</h4>
                  <h5>Project manager</h5>
                  <div className="social-box">
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card card-padding">
                  <div className="team-card-img-box">
                    <img src="./imgs/team.png" alt="" />
                  </div>
                  <h4>Ortiqov Anvarjon</h4>
                  <h5>Project manager</h5>
                  <div className="social-box">
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card card-padding">
                  <div className="team-card-img-box">
                    <img src="./imgs/team.png" alt="" />
                  </div>
                  <h4>Ortiqov Anvarjon</h4>
                  <h5>Project manager</h5>
                  <div className="social-box">
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                    <div className="social-icon">
                      <i class="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
