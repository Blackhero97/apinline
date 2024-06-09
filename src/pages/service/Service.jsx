import React from "react";
import "./services.css";
import { CheckCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";

function Service() {
  return (
    <>
      <div className="services page-padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Services page</title>
          <meta
            name="keywords"
            content="Software , UI/UX , UX and UI , Web programming, JavaScript, React , CSS , HTML , Web design, Mobile application, Seo"
          />
          <link rel="canonical" href="/service" />
        </Helmet>
        <div className="services-box">
          <div className="services-box-top">
            <h2>Our Services</h2>
            <p>
              Our comprehensive range of services includes web design, mobile
              app development, SEO, social media marketing, and more. Whether
              you're a startup or an established enterprise, our experts will
              craft solutions that drive results.
            </p>
          </div>
          <div className="services-box-bottom">
            <div className="services-card card-padding">
              <div className="services-card-img-box">
                <img
                  src="./imgs/services-img.png"
                  alt="service-img"
                  loading="lazy"
                />
              </div>
              <h3>Web Design</h3>
              <p>
                Our Web Design service is all about creating visually stunning
                and user-friendly websites that leave a lasting impression on
                your audience. We blend creativity with functionality to deliver
                websites that showcase your brand's identity while ensuring
                seamless navigation and optimal user experience.
              </p>
              <div className="services-card-box">
                <h4>Starts at Price: $500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card card-padding ">
              <div className="services-card-img-box">
                <img
                  src="./imgs/services-img.png"
                  alt="service-img"
                  loading="lazy"
                />
              </div>
              <h3>Web Development</h3>
              <p>
                Apinline specializes in creating modern, interactive, and
                intuitive websites tailored to your business needs. We focus on
                user experience (UX/UI) and ensure the highest standards of
                security and performance using the latest technologies.
              </p>
              <div className="services-card-box">
                <h4>Starts at Price: $1,500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card card-padding">
              <div className="services-card-img-box">
                <img
                  src="./imgs/services-img.png"
                  alt="service-img"
                  loading="lazy"
                />
              </div>
              <h3> Telegram Bot Development:</h3>
              <p>
                Our team develops Telegram bots for various purposes. From
                automating customer service to streamlining processes, we
                provide solutions that enhance efficiency and engagement.
              </p>
              <div className="services-card-box">
                <h4>Starts at Price: $500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card card-padding">
              <div className="services-card-img-box">
                <img
                  src="./imgs/services-img.png"
                  alt="service-img"
                  loading="lazy"
                />
              </div>
              <h3>SMM (Social Media Management):</h3>
              <p>
                We offer social media management services to help grow your
                business online. Our experts develop effective strategies to
                enhance your brand's presence, engage with customers, and boost
                sales.
              </p>
              <div className="services-card-box">
                <h4>Starts at Price: $500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card card-padding">
              <div className="services-card-img-box">
                <img
                  src="./imgs/services-img.png"
                  alt="service-img"
                  loading="lazy"
                />
              </div>
              <h3>Mobile App Development:</h3>
              <p>
                With extensive experience in developing mobile applications for
                both Android and iOS platforms, we transform your ideas into
                fully functional apps using the latest tools and technologies.
              </p>
              <div className="services-card-box">
                <h4>Starts at Price: $500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
