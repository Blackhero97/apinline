import React from "react";
import Service from "../../pages/service/Service";
import { CheckCircleOutlined } from "@ant-design/icons";
import "../../pages/service/services.css";
function Category() {
  return (
    <>
      {" "}
      <div className="services-info">
        <div className="services-info-left">
          <h2>Our Comprehensive Digital Solutions</h2>
          <p>
            At Apinline, we offer a comprehensive suite of digital solutions
            designed to propel your business to new heights in the digital
            realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake. From
            captivating web design that leaves a lasting impression to seamless
            web development that ensures optimal functionality, we cover every
            aspect of your online presence.
          </p>
        </div>
        <div className="services-info-right">
          <img src="./imgs/services-img.svg" alt="" />
        </div>
      </div>
      <Service />
      <div className="category">
        <div className="category-box-top">
          <h2>Categories of Services</h2>
          <p>
            At Apinline, we are committed to providing exceptional digital
            solutions tailored to suit your unique business needs. Our
            comprehensive service offerings cover a wide spectrum of digital
            disciplines, including web design, app development, web development,
            and marketing.
          </p>
        </div>
        <div className="category-box-bottom">
          <div className="category-link">
            <button className="primary-btn">
              <CheckCircleOutlined />
              Web Design
            </button>
            <button className="light-btn">
              <CheckCircleOutlined />
              Web Development
            </button>
            <button className="light-btn">
              <CheckCircleOutlined />
              Mobile App Development
            </button>
            <button className="light-btn">
              <CheckCircleOutlined />
              Digital Marketing
            </button>
          </div>
          <div className="category-info-box">
            <div className="category-info-box-top">
              <h3>Web Design</h3>
              <p>
                Web Design is the art and science of creating visually appealing
                and user-friendly websites that reflect your brand identity and
                resonate with your target audience. At Apinline, our web design
                process involves a careful blend of creativity, user experience
                (UX) design, and cutting-edge technologies. We take the time to
                understand your business goals, target market, and unique
                selling points to create a website that not only looks great but
                also drives results.
              </p>
              <div className="category-info-wrapper">
                <div className="category-info-box-bottom">
                  <h3>Key Features</h3>
                  <div className="category-info-box-bottom-cards">
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>

                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>
                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>

                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>
                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="category-info-box-bottom">
                  <h3>Design Process</h3>
                  <p>
                    Our Web Design process follows a systematic approach to
                    deliver a website that aligns perfectly with your business
                    needs and branding. Here's an overview of our design process
                  </p>
                  <div className="category-info-box-bottom-cards">
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>

                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>
                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>

                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                    <div className="category-info-box-bottom-card">
                      <h4>Customized Design</h4>
                      <p>
                        We craft bespoke designs tailored to match your brand
                        personality and industry.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="category-info-box-bottom">
                  <h3>Design Process</h3>
                  <p>
                    Our Web Design process follows a systematic approach to
                    deliver a website that aligns perfectly with your business
                    needs and branding. Here's an overview of our design process
                  </p>
                  <table>
                    <tr>
                      <th>Project Name</th>
                      <th>Industry</th>
                      <th>Website URL</th>
                    </tr>
                    <tr>
                      <td>CodersPlanet</td>
                      <td>Education,Software</td>
                      <td>codersplanet.uz</td>
                    </tr>
                    <tr>
                      <td>CodersPlanet</td>
                      <td>Education,Software</td>
                      <td>codersplanet.uz</td>
                    </tr>
                    <tr>
                      <td>CodersPlanet</td>
                      <td>Education,Software</td>
                      <td>codersplanet.uz</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
