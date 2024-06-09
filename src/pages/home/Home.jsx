import "./home.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Service from "../service/Service";
import Projects from "../projects/Projects";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
      <div className="home page-padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page</title>
          <meta
            name="keywords"
            content="Software , UI/UX , UX and UI , Web programming, JavaScript, React , CSS , HTML , Web design, Mobile application, Seo"
          />
          <link rel="canonical" href="/" />
        </Helmet>
        <div className="home-box page-padding">
          <div className="home-text-box">
            <h1 className="h1">
              Elevate Your Digital Presence with{" "}
              <span className="tesla">Apinline</span>
            </h1>
            <p>
              We specialize in crafting cutting-edge websites and applications
              that resonate with your audience. Let us transform your vision
              into a captivating digital reality, setting your brand apart in
              the digital sphere.
            </p>
            <div className="home-btn-box">
              <Link to={"/contact"}>
                <button className="primary-btn">Schedule a Call</button>
              </Link>
              <Link to={"/portfolio"}>
                <button className="light-btn">View Projects</button>
              </Link>
            </div>
          </div>
          <div className="home-img-box">
            <div className="animation-box">
              <div class="container-animation">
                <div class="card one" style={{ "--i": -1 }}>
                  <div class="content" style={{ "--j": 1 }}>
                    <div className="card-head">
                      <img src="logo.png" alt="" />
                    </div>
                    <div className="wrapper">
                      <div className="content-btn-box">
                        <h4>Web design</h4>
                        <button>Hire us</button>
                      </div>
                      <div className="content-info-box">
                        <h4>Hasanboy Nurmuhammadov</h4>
                        <h6>2024</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card two" style={{ "--i": 0 }}>
                  <div class="content" style={{ "--j": 1 }}>
                    <div className="card-head">
                      <img src="logo.png" alt="" />
                    </div>
                    <div className="wrapper">
                      <div className="content-btn-box">
                        <h4>Web design</h4>
                        <button>Hire us</button>
                      </div>
                      <div className="content-info-box">
                        <h4>Hasanboy Nurmuhammadov</h4>
                        <h6>2024</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card three" style={{ "--i": 1 }}>
                  <div class="content" style={{ "--j": 1 }}>
                    {" "}
                    <div className="card-head">
                      <img src="logo.png" alt="" />
                    </div>
                    <div className="wrapper">
                      <div className="content-btn-box">
                        <h4>Web design</h4>
                        <button>Hire us</button>
                      </div>
                      <div className="content-info-box">
                        <h4>Hasanboy Nurmuhammadov</h4>
                        <h6>2024</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-logos page-padding">
        <h2>Trusted by more than 100+ companies</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 3,
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
            <img src="./imgs/Company logo.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/Company logo-1.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/Company logo-2.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/Company logo-3.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/Company logo-4.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/Company logo-3.svg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="our-numbers card-padding">
        <div className="our-number-box">
          <h2>Our numbers tell more about us</h2>
        </div>
        <div className="our-number-boxes">
          <div className="our-number-box">
            <h3>6+</h3>
            <span>Years in business</span>
          </div>
          <div className="our-number-box">
            <h3>10+</h3>
            <span>Successful projects</span>
          </div>
          <div className="our-number-box">
            <h3>120+</h3>
            <span>Opinions expressed by our customers</span>
          </div>
        </div>
      </div>
      <Service />
      <Projects />
    </>
  );
}

export default Home;
