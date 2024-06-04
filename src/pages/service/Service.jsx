import React from "react";
import "./services.css";
import { CheckCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

function Service() {
  return (
    <>
      <div className="services">
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
            <div className="services-card">
              <div className="services-card-img-box">
                <img src="./imgs/services-img.png" alt="" />
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
                <h4>Starts at Price: $1,500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card">
              <div className="services-card-img-box">
                <img src="./imgs/services-img.png" alt="" />
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
                <h4>Starts at Price: $1,500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card">
              <div className="services-card-img-box">
                <img src="./imgs/services-img.png" alt="" />
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
                <h4>Starts at Price: $1,500</h4>
                <button className="primary-btn">
                  Book a Call
                  <RightCircleOutlined />
                </button>
              </div>
            </div>
            <div className="services-card">
              <div className="services-card-img-box">
                <img src="./imgs/services-img.png" alt="" />
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
                <h4>Starts at Price: $1,500</h4>
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
