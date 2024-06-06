import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./testimonials.css";
function Testimonials() {
  return (
    <div>
      <div className="testimonials">
        <div className="testimonials-box">
          <div className="testimonials-box-top">
            <h2>Our Testimonials</h2>
            <p>
              Don't just take our word for it; hear what our satisfied clients
              have to say about their experience with Apinline. We take pride in
              building lasting relationships and delivering exceptional results.
            </p>
          </div>
          <div className="testimonials-box-bottom">
            <Swiper
              slidesPerView={2.75}
              spaceBetween={15}
              loop={true}
              breakpoints={{
                1200: {
                  slidesPerView: 2.75,
                },
                992: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                475: {
                  slidesPerView: 2,
                },
                320: {
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
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonials-card">
                  <div className="testimonials-card-info">
                    <div className="icon-box">
                      <i class="bx bxl-twitter"></i>
                    </div>
                    <p>
                      Working with Apinline was a pleasure. Their web design
                      team created a stunning website that perfectly captured
                      our brand's essence. The feedback from our customers has
                      been overwhelmingly positive.
                    </p>
                  </div>
                  <div className="testimonials-card-founder">
                    <div className="testimonials-card-img-box">
                      <img src="./imgs/founder.png" alt="" />
                    </div>
                    <div className="founder-info">
                      <h5>Hasanboy Nurmuhammadov</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
